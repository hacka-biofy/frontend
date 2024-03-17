"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header";
import Lottie from "lottie-react";
import animationData from "@/lotties/progress.json";
import {
  InfoCircledIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const infos = [
  {
    title: "Gênero",
    description: "Estafilococos",
  },
  {
    title: "Morfologia",
    description: "Coco",
  },
  {
    title: "Gram",
    description: "Positivo",
  },
];

export default function Component() {
  const [showLottie, setShowLottie] = useState(true);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(false);
      setShowCard(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {showLottie && (
        <div className="flex flex-col h-screen items-center pt-40">
          <Lottie animationData={animationData} className="w-32" loop={true} />
        </div>
      )}
      {showCard && (
        <div className="flex flex-col h-screen items-center pt-6">
          <Card className={cn("w-[380px]")}>
            <CardHeader>
              <CardTitle>Staphylococcus aureus</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <InfoCircledIcon />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none pb-1">
                    Características
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Causadora de muitos tipos de infecção, desde furúnculos até
                    septicemias..
                  </p>
                </div>
              </div>
              <div className="pt-4">
                {infos.map((info, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-secondary" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {info.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Link href="/">
                <Button className="w-full">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Nova análise
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}
      <Toaster />
    </>
  );
}
