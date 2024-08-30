
import React from 'react';
import styles from './form.module.css';
import clientPromise from '@/lib/mongodb';
import { revalidatePath } from 'next/cache';

function Add() {

 
  const addPost = async(formData) =>{
    "use server"; 
    const title = formData.get("title")
    const description = formData.get("description");


    const client = await clientPromise;
    const db = client.db("nexttest");
   
    await db.collection("posts").insertOne({title,description});
    console.log(title,description);
    revalidatePath("/post")
    
  }
 



























  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: ''
  // });

  // const handleChange = (e) => { 
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/post", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(formData)
  //   });

  //   if (res.ok) {
  //     console.log("Form submitted successfully", formData);
  //   } else {
  //     console.error("Error submitting form", res.statusText);
  //   }
  // };

  

  return (
    <form className={styles.form} action={addPost} >
      <div className={styles.formGroup}>
        <label htmlFor='title'>Title:</label>      
        <input  className={styles.input} type='text' name="title" id='title' />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='description'>Description:</label>      
        <textarea  className={styles.textarea} name="description" id='description' />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='image'>Image:</label>      
        <input 
          className={styles.file} type='file' name="image" id='image' />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Add;
