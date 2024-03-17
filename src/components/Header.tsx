import { AvatarMenu } from "./AvatarMenu";
import logo from "../../public/logoverde.png";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-zinc-800 border-b p-4">
      <div className="container mx-auto flex justify-center gap-4">
        <Image alt={"logo"} src={logo} width={100} className="" />
        <AvatarMenu />
      </div>
    </header>
  );
}
