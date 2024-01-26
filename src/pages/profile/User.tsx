import { User } from "next-auth";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { useLottie } from "lottie-react";
import starAnimation from "../../../public/animation/star.json";
import diagnosisAni from "../../../public/animation/hospital.json";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Button } from "~/components/ui/button";

export interface Artwork {
  artist: string;
  art: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const User = (props: { user: User }) => {
  const style1 = {
    height: 70,
  };

  const style2 = {
    height: 30,
  };

  const option1 = {
    animationData: starAnimation,
    loop: true,
  };

  const option2 = {
    animationData: diagnosisAni,
    loop: true,
  };

  const { View: View1 } = useLottie(option1, style1);
  const { View: View2 } = useLottie(option2, style2);

  return (
    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-6">
      <div className="col-span-2 flex flex-col items-center">
        <Image
          src={props.user.image}
          width={300}
          height={300}
          className="rounded-full"
        />
        <br />
        <div
          className={`text-center ${poppins.className} text-3xl font-semibold`}
        >
          {props.user.name}
        </div>
        <div className="text-center tracking-tighter text-muted-foreground">
          {props.user.email}
        </div>
        <Button className="mt-3 w-72">Edit Profile</Button>
      </div>
      <div className="col-span-4 flex flex-col items-center">
        <div className="flex items-center text-2xl font-semibold">
          Your Starred Hospital
          <span>{View1}</span>
        </div>

        <ScrollArea className="w-4/5 whitespace-nowrap rounded-md border p-3 hover:bg-gray-100">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className=" object-cover"
                    width={300}
                    height={50}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex items-center gap-2 p-5 text-2xl font-semibold">
          Your Previous Diagnosis <span>{View2}</span>
        </div>
        <ScrollArea className="w-4/5 whitespace-nowrap rounded-md border p-3 hover:bg-gray-100">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className=" object-cover"
                    width={300}
                    height={50}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default User;
