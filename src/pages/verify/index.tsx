import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const LazyLoadedLottieComp = dynamic(() => (import('lottie-react')), {ssr: false});
import { Raleway } from 'next/font/google';
import mailAni from "../../../public/animation/mail.json";
import { cn } from '~/lib/utils';

const raleway = Raleway({ subsets: ["latin"], weight: 'variable' })

const index = () => {
  const router = useRouter();
  const { token } = router.query;
  return (
    <section className='flex flex-col items-center py-10 gap-3'>
        <LazyLoadedLottieComp animationData={mailAni} className="w-1/5" loop={true} />
        <h3 className={cn(raleway.className, "text-2xl font-semibold")}>Check Your Email</h3>
        <p className={cn(raleway.className, "text-muted-foreground font-medium")}>Verify your email for further verification</p>
    </section>
  )
}

export default index;