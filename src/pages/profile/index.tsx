import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { User } from 'next-auth';
import React, { FC } from 'react'
import { getServerAuthSession } from '~/server/auth';

const Profile: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ user }) => {
  console.log(user);
  return (
    <section className='h-[90%] flex flex-col px-32 py-10'>
        <div className='text-muted-foreground tracking-tighter text-sm'>
            {/* <Image src={session?.user?.image} alt='profile image'/> */}
            {user.name}
        </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps<{user: User}> = async (ctx) => {
    const session = await getServerAuthSession(ctx);

    if (!session) {
        return {
            redirect: {
                destination: "/sign-in-patient", 
                permanent: false
            }
        }
    }
    else {
        return {
            props: {
                user: session.user
            }
        }
    }
};

export default Profile;