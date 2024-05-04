export const getDalyGame = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getGamesData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=games`,
      { next: { revalidate: 320 } }
    );

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getSearchData = async (title: string) => {
  try {
    const decodedTitle = decodeURI(title);
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodedTitle}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getIdGame = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { cache: 'no-store' }
    );
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getGameDalySorted = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: 'no-store' }
    );

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
