import React, { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import Link from "next/link"

function NotFound() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        }, 3000)
    }, [])
  return (
    <div className='not-found'>
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>

    </div>
  );
}

export default NotFound;