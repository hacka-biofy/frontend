"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AvatarMenu } from "@/components/AvatarMenu";
import logo from "../../public/logoverde.png";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ImagePlusIcon, LucideMessageCircleWarning } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToastAction } from "@/components/ui/toast";
import axios from 'axios'

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { toast } = useToast();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      console.log('entrou if selected')
      const formData = new FormData();
      formData.append("image", selectedImage);

      axios.post("http://localhost:3001/upload", formData)
        .then((response) => {
          console.log('rere: ', response)
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
          <div className="max-w-md w-full space-y-4 m-4">
            <Alert variant="default" className="bg-amber-400">
              <div className="m-2">
                <div className="flex flex-row">
                  <AlertTitle className="text-gray-900 font-medium text-lg mb-2">
                    {"Alerta"}
                  </AlertTitle>
                  <LucideMessageCircleWarning className="mx-1 w-4" />
                </div>
                <AlertDescription className="text-gray-800 mb-2">
                  Não faça o envio de fotos desfocadas ou de resolução muito baixa, mantendo assim a performance na predição.
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
                <ImagePlusIcon className="w-12 h-12" />
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
                    variant="outline"
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
