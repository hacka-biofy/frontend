"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../../public/logoverde.png";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast"

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { toast } = useToast()

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      // notify('Imagem enviada!');

      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          toast({
            title: "Sucesso!",
            description: "Sua imagem foi enviada",
          })
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="bg-zinc-800 border-b p-4">
          <div className="container mx-auto flex justify-center gap-4">
            <Image alt={"logo"} src={logo} width={100} className="" />
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-sm w-full space-y-4 m-12">
            <div className="flex items-center justify-center border border-dashed border-gray-200 rounded-lg w-full h-60 relative">
              <input
                aria-label="Upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                type="file"
                onChange={handleImageChange}
              />
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <ImageIcon className="w-12 h-12" />
              )}
            </div>
            <div className="flex flex-col gap-2">
              {selectedImage ? (
                <>
                  <Button
                    className="w-full bg-secondary"
                    onClick={handleUpload}
                  >
                    Enviar
                  </Button>
                  <Button
                    className="w-full"
                    variant="destructive"
                    onClick={() => {
                      setSelectedImage(null);
                    }}
                  >
                    Cancelar
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <input
                      aria-label="Upload"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      type="file"
                      onChange={handleImageChange}
                    />
                    <Button
                      className="w-full bg-secondary"
                      variant="outline"
                      // onClick={handleImageChange}
                    >
                      Escolher da Galeria
                    </Button>
                  </div>
                  <Button className="w-full" variant="outline">
                    Tirar Foto
                  </Button>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
      <Toaster />
    </>
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
