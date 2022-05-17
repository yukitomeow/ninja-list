import React from 'react'
import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from  "next/link"

export const getStaticProps = async ()=>{
  const response = await fetch ("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {ninjas: data}
  }

}

function Ninjas({ninjas}) {
  return (<>
     <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>All Ninjas</div>
      {ninjas.map((element)=>(
        <Link href={'/ninjas/'+ element.id}  key={element.id}> 
          <a className={styles.single}>
            <h3>{element.name}</h3>
          </a>
        </Link>
      ))}
  </>)
}

export default Ninjas