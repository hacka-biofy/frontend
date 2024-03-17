import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "../../public/logoverde.png";
import Image from "next/image";

export default function Component() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-zinc-800 border-b p-4">
      <div className="container mx-auto flex justify-center gap-4">
          <Image alt={"logo"} src={logo} width={100} className=""/>
          {/* <Button size="sm" variant="outline">
            logo biosense
          </Button> */}
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-sm w-full space-y-4 m-12">
          <div className="flex items-center justify-center border border-dashed border-gray-200 rounded-lg w-full h-60">
            <input
              aria-label="Upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="file"
            />
            <ImageIcon className="w-12 h-12" />
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-full bg-secondary">Tirar Foto</Button>
            <Button className="w-full" variant="outline">Escolher da Galeria</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}