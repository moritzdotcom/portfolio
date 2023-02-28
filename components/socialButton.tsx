import { IconType } from 'react-icons';

export default function SocialButton({
  Icon,
  href,
  ariaLabel,
}: {
  Icon: IconType;
  href: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border hover:bg-indigo-600 hover:text-zinc-800 border-indigo-600 bg-zinc-800 text-indigo-600 text-2xl p-3"
      aria-label={ariaLabel || 'social-link'}
    >
      <Icon />
    </a>
  );
}
