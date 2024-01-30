import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Session } from "next-auth";
import React from "react";
import Carousel from "../../components/Carousel/carousel";
import Services from "~/components/Services/Services";
import { getServerAuthSession } from "~/server/auth";

const Dashboard: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <div className="px-20 py-5">
      <Carousel />
      <Services />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  session: Session;
}> = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/sign-in-patient",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        session,
      },
    };
  }
};

export default Dashboard;
