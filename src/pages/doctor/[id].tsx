import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react'   
import { api } from '~/utils/api';
export default function page() {
    const router = useRouter();
    const id = router.query.id;

    if (!id) {
        return <></>;
    }

    const { data, isLoading } = api.doctor.findDoctor.useQuery({ id: +id });

    if (isLoading) {
        return <section className='flex items-center justify-center h-[30vh]'>
            <Loader2 className='animate-spin w-10 h-10' />
        </section>
    }


    return <>{JSON.stringify(data)}</>;
}



