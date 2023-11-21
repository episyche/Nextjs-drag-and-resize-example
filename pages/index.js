import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Rnd } from "react-rnd";
import { useRef } from 'react';

export default function Home() {

  const parentRef = useRef()

  return (
    <div style={{ marginTop: '100px' }}>
      <div ref={parentRef} style={{ width: '1000px', height: '500px', marginLeft: 'auto', marginRight: 'auto', border: "1px solid gray" }}>
        <Rnd
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0"
          }}
          bounds={'parent'}
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: 200
          }}
        >
          <Image src={"/episycheland.jpg"} className='min-w-[100vw] min-h-[100vh]' layout='fill'></Image>
        </Rnd>
      </div>

    </div>
  )
}
