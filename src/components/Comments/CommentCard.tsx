import Image from "next/image";
import React, { FC } from "react";

interface CardProps {
  image: String;
  name: String;
  disease: String;
  comment: String;
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const CardComment: FC<CardProps> = (props) => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex gap-6">
            <Image
              src={props.image}
              width={125}
              alt=""
              height={125}
              className="rounded-full border"
            />
            <div className="flex-col p-3">
              <CardTitle className="text-lg">{props.name}</CardTitle>
              <CardDescription>{props.disease}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>{props.comment}</CardContent>
      </Card>
    </div>
  );
};

export default CardComment;
