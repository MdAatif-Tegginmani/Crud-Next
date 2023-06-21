"use client"
import Head from "next/head"
import {BiUserX} from 'react-icons/bi'
import Table from './components/tabel'
import Form from "./components/form"
import { useState } from "react"

export default function Home() {

  const [visible,setVisible]=useState(false)

  const handler=()=>{
    setVisible(!visible)
  }
  return (
    <section>
    <Head>
    <title>Next App</title>
    <meta name='description' content='Generated by create next app' />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    
    
    <main className='py-5'>
    <h1 className="text-xl md:text-5xl text-center font-bold py-10">Employee Management</h1>

    <div className="container mx-auto flex justify-between py-5 border-b">
      <div className="left flex gap-3">
        <button onClick={handler} className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
            Add Employee <BiUserX size={23}></BiUserX>
        </button>
      </div>
      </div>

        { visible ?<Form></Form> : <></>}
        

        <div className="container mx-auto">
        <Table></Table>
        </div>

    
    </main>
    </section>
    )
}
