"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AvatarMenu } from "@/components/AvatarMenu";
import logo from "../../public/logoverde.png";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

import { LucideMessageCircleWarning } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToastAction } from "@/components/ui/toast";

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { toast } = useToast();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          //lógica
          toast({
            title: "Sucesso!",
            description: "Sua imagem foi enviada",
            action: (
              <ToastAction altText="Fechar notificação">Fechar</ToastAction>
            ),
          });

          setTimeout(() => {
            setSelectedImage(null);
          }, 2000);
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
            <AvatarMenu />
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center p-4">
          <div className="max-w-sm w-full space-y-4 m-4">
            <Alert variant="default" className="bg-amber-400">
              <div className="m-2">
                <div className="flex flex-row">
                  <AlertTitle className="text-gray-900 font-medium text-lg mb-2">
                    {"Alerta"}
                  </AlertTitle>
                  <LucideMessageCircleWarning className="mx-1 w-4" />
                </div>
                <AlertDescription className="text-gray-800 mb-2">
                  Não faça o envio de fotos desfocadas ou de qualidade inferior
                  à 360p, mantendo assim a performance na predição.
                </AlertDescription>
              </div>
            </Alert>

            <div className="flex items-center justify-center border border-dashed border-gray-200 rounded-lg w-full h-60 relative">
              <input
                aria-label="Upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                type="file"
                onChange={handleImageChange}
              />
              {selectedImage ? (
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="object-cover w-full h-full rounded-lg"
                  width={200}
                  height={200}
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
                  <div className="w-full relative">
                    <input
                      aria-label="Upload"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      type="file"
                      onChange={handleImageChange}
                    />
                    <Button className="w-full bg-secondary" variant="outline">
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
