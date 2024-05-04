import Container from '@/components/container';
import { DalyGameProps } from '@/types/dalyGame';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { TagLabel } from './components/tag';
import { getDalyGame, getIdGame } from '@/services/dalyGames.service';
import CardGame from '@/components/cardGame';
import { Metadata } from 'next';

interface IParamsGame {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: IParamsGame): Promise<Metadata> {
  try {
    const response: DalyGameProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`,
      { cache: 'no-store' }
    )
      .then((res) => res.json())
      .catch(() => {
        return {
          title:
            'DalyGames - Descubra jogos incríveis para se divertir',
        };
      });

    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: 'DalyGames - Descubra jogos incríveis para se divertir',
    };
  }
}

export default async function GameDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const gameId: DalyGameProps = await getIdGame(id);
  const gameDaySorted: DalyGameProps = await getDalyGame();

  if (!gameId) redirect('/');

  return (
    <main>
      <Container>
        <div className="bg-black h-80 sm:h-96 w-full relative mt-10 rounded-lg">
          <Image
            className="object-cover w-full rounded-lg h-80 sm:h-96 opacity-50"
            src={gameId.image_url}
            alt={gameId.title}
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>

        <h1 className="font-bold text-xl my-4">{gameId.title}</h1>
        <p>{gameId.description}</p>

        <h2 className="font-bold text-xl mt-7 mb-2">Plataformas</h2>

        <div className="flex gap-2 flex-wrap">
          {gameId.platforms.map((item, index) => (
            <TagLabel key={index} tag={item} />
          ))}
        </div>

        <h2 className="font-bold text-xl mt-7 mb-2">Categorias</h2>

        <div className="flex gap-2 flex-wrap">
          {gameId.categories.map((item, index) => (
            <TagLabel key={index} tag={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento: </strong>
          {gameId.release}
        </p>

        <h2 className="font-bold text-xl mt-7 mb-2">
          Jogo recomendado:
        </h2>
        <div className="flex">
          <div className="flex-grow">
            <CardGame data={gameDaySorted} />
          </div>
        </div>
      </Container>
    </main>
  );
}
