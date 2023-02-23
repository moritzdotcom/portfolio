import { FaDatabase, FaLink, FaReact } from 'react-icons/fa';
import {
  SiPrisma,
  SiRuby,
  SiRubyonrails,
  SiStripe,
  SiTailwindcss,
} from 'react-icons/si';
import { BsFillGearFill } from 'react-icons/bs';
import Link from 'next/link';

export const Tags = {
  Blockchain: FaLink,
  React: FaReact,
  'Ruby on Rails': SiRubyonrails,
  SQL: FaDatabase,
  Prisma: SiPrisma,
  Stripe: SiStripe,
  Tailwind: SiTailwindcss,
  'Business Automation': BsFillGearFill,
  Ruby: SiRuby,
} as const;

export default function ProjectCard({
  name,
  link,
  description,
  image,
  tags,
}: {
  name: string;
  link: string;
  description: string;
  image: string;
  tags?: (keyof typeof Tags)[];
}) {
  return (
    <Link
      href="/"
      scroll={false}
      className="rounded-lg overflow-hidden group"
      as={link}
    >
      <div className="rounded-lg w-full overflow-hidden flex flex-col gap-2">
        <div className="overflow-hidden w-full">
          <img
            src={image}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex gap-2 flex-wrap text-xs">
          {tags?.map((tag) => {
            const Icon = Tags[tag];
            return (
              <span
                key={`${name}-${tag}`}
                className="bg-white text-indigo-900 flex items-center gap-1 rounded-full px-2 py-1"
              >
                {<Icon />}
                {tag}
              </span>
            );
          })}
        </div>
        <div>
          <h3 className="text-white text-xl mb-1">{name}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
