import CardGame from '@/components/cardGame';
import Container from '@/components/container';
import InputSearch from '@/components/inputSearch';
import { DalyGameProps } from '@/types/dalyGame';
import { getSearchData } from '@/services/dalyGames.service';

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const searchData: DalyGameProps[] = await getSearchData(title);

  return (
    <main className="w-full">
      <Container>
        <InputSearch />

        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base de jogos
        </h1>

        {!searchData && <p>Jogo não encontrado!</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchData &&
            searchData.map((item) => (
              <CardGame key={item.id} data={item} />
            ))}
        </section>
      </Container>
    </main>
  );
}
