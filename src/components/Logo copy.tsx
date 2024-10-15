import Image from 'next/image';
import Link from 'next/link';
import { Logo } from './logo';


export default function LogoComponent({ text = true }: any) {
  return (
    <Link className="shrink-0 flex gap-2 items-center" href="/dashboard">
      {!text && <div className="rounded-lg w-10 overflow-hidden">
        <Logo/>
        {/* <Image src={Logo} alt="hyperion" /> */}
      </div>}
      {text && <h1 className="font-[900] text-[24px]">hyperion</h1>}
    </Link>
  );
}
