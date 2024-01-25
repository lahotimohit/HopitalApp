import { Loader2 } from 'lucide-react';
import React from 'react'

const loading = () => {
  return (
    <section className='h-[90%] flex items-center justify-center'>
        <Loader2 className='animate-spin duration-1000 ease' />
    </section>
  )
}

export default loading;