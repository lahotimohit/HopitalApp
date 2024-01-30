import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { User } from "next-auth";
import React, { FC } from "react";
import UserDetail from "../../components/UserProfile/User";
import { getServerAuthSession } from "~/server/auth";

const Profile: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  user,
}) => {
  console.log(user);
  return (
    <div>
      <UserDetail user={user} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ user: User }> = async (
  ctx,
) => {
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
        user: session.user,
      },
    };
  }
};

export default Profile;
