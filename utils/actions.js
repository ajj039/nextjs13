"use server";

// import { resolve } from "styled-jsx/css";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from 'zod';


export const createUser = async(prevState, formData)=>{
    
    const name = formData.get("name")
    const email = formData.get("email")
    const country = formData.get("country")
    const User = z.object({
        name: z.string().min(5),
        email:z.string().email(),
        country:z.string().min(10)
      });
   try {
    User.parse({ name, email, country });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await prisma.users.create({
        data:{
name,
email,
country
        }
    })
    revalidatePath("/users");
    return {
        message:"user created"
    }
   } catch (error) {
    console.log("errorsdasdasdasd", error)
    return {
        message:error[0]?.message || "error"
    }
   }

}

export const deleteUser = async (formData) => {
    const id = formData.get('id');
    console.log("iddsd", id)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await prisma.users.delete({
      where: { id },
    });
    revalidatePath('/users');
  };