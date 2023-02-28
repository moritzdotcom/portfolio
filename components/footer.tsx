import Image from 'next/image';
import logo from '/public/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-zinc-900 to-indigo-900 text-white text-center shadow-xl mt-5">
      <div className="p-3 flex items-center justify-between max-w-screen-xl mx-auto">
        <Image src={logo} alt="ML Logo" width={30} />
        <p>© 2023 Moritz Löchner</p>
      </div>
    </footer>
  );
}
