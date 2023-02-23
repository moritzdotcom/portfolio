import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function NavLink({
  path,
  id,
  text,
}: {
  path: string;
  id: string;
  text: string;
}) {
  const scrollToId = () => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (path == '/') {
    return (
      <a className="cursor-pointer" onClick={scrollToId}>
        {text}
      </a>
    );
  } else {
    return (
      <Link className="cursor-pointer" href={`/#${id}`}>
        {text}
      </Link>
    );
  }
}

export default function Navbar() {
  const [minimize, setMinimize] = useState(false);
  const router = useRouter();

  let lastOffset = 0;
  const handleScroll = (e: Event) => {
    if (Math.abs(lastOffset - window.scrollY) < 60) return;
    setMinimize(lastOffset < window.scrollY);
    lastOffset = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 overflow-hidden z-50">
      <nav className="w-[200vw] -translate-x-1/4">
        <div
          className={`transition-transform hover:scale-100 hover:translate-y-0 bg-gradient-to-r from-indigo-700 via-zinc-900 to-gray-900 py-3 ${
            minimize ? 'scale-50 -translate-y-4' : 'scale-100'
          }`}
        >
          <div className="flex items-center justify-center text-gray-300 gap-5 text-xl">
            <NavLink id="about" text="About Me" path={router.pathname} />
            <NavLink id="projects" text="Projects" path={router.pathname} />
            <NavLink id="contact" text="Contact" path={router.pathname} />
          </div>
        </div>
      </nav>
    </div>
  );
}
