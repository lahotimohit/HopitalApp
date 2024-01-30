import React, { FC } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { FaUserDoctor } from "react-icons/fa6";

interface ServiceCardProps {
  name: String;
  description: String;
}

const ServiceCard: FC<ServiceCardProps> = (props) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="w-full">
        <Card className="shadow-custom px-4 py-2">
          <CardHeader>
            <CardTitle className="text-xl font-semibold tracking-tighter">
              {props.name}
            </CardTitle>
          </CardHeader>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="flex items-center gap-1">
        <span>
          <FaUserDoctor />
        </span>
        <p>{props.description}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServiceCard;
