import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react'
import SignInCard from '~/components/SignInCard';
import { getServerAuthSession } from '~/server/auth';
const SignInPatient: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return (
    <SignInCard />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (session && session.user) {
    return {
      redirect: {
        destination: "/dashboard", 
        permanent: true
      }
    }
  } else {
    return {
      props: {}
    }
  }
}

export default SignInPatient;