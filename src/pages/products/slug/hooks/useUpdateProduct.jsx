
import React, {useState} from 'react'
import z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";


const formSchema = z.object({
  title: z.string("title must be a string").min(2),
  description: z.string("description must be a string").min(2),
  price: z.any("price must be a string"),
  category: z.string("category must be a string").min(2).nullable().optional(),
});


export const useUpdateProduct = (product)=>{
    const [isLoading, setisLoading] = useState(false)
      const { id } = useParams();
    const toast = useToast()
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: product
    })

    const onSubmit = async(data)=>{
        setisLoading(true)
       try {
         const res = await axios.patch(`http://localhost:4000/api/v1/product/update-product/${id}`, data)        
         console.log(res);
          toast({
        title: "Success ✅✅",
        description: "product updated successfully",
      });
       } catch (error) {
        
       }finally{
                setisLoading(false)
       }
    }
    return{
        form,
        onSubmit,isLoading
    }
}