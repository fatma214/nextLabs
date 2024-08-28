import React from 'react'
import {MongoClient } from 'mongodb'
import clientPromise from '@/lib/mongodb';
const page= async() =>{

     const client=await  clientPromise;
    const db=await client.db("nexttest");
   const news=await db.collection("news").find({}).toArray();
   console.log(news);
   
  return (
    <div>page</div>
  )
}

export default page