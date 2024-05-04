import Link from 'next/link';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';
import { DalyGameProps } from '@/types/dalyGame';

interface ICardGame {
  data: DalyGameProps;
}

export default function CardGame({ data }: ICardGame) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            className="rounded-lg object-cover"
            src={data.image_url}
            alt={data.title}
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="font-bold text-sm px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden">
            {data.title}
          </p>
          <FiArrowDownCircle size={24} color="#000000" />
        </div>
      </section>
    </Link>
  );
}
