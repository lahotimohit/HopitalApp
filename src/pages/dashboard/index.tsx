import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Session } from "next-auth";
import React from "react";
import Carousel from "../../components/Carousel/carousel";
import StarHospital from "~/components/StarHospital/Star";
import Services from "~/components/Services/Services";
import PatientComment from "~/components/Comments/PateintComment";
import { getServerAuthSession } from "~/server/auth";
import { Montserrat } from "next/font/google";

const Dashboard: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <div className="px-20 py-5">
      <Carousel />
      <div className="mt-7">
        <span
          className={`flex p-5 ${montserrat.className} text-rose text-3xl font-semibold`}
        >
          Services We Offer
        </span>
      </div>
      <Services />
      <div className="mt-7">
        <span
          className={`flex p-5 ${montserrat.className} text-rose text-3xl font-semibold`}
        >
          Meet our Star Hospitals
        </span>
      </div>
      <StarHospital />
      <div className="mt-7">
        <span
          className={`flex p-5 ${montserrat.className} text-rose text-3xl font-semibold`}
        >
          What our Patient Says
        </span>
      </div>
      <PatientComment />
    </div>
  );
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

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
