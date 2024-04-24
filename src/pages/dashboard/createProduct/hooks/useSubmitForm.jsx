import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string("title must be a string").min(2).max(20),
  description: z.string("description must be a string").min(2),
  price: z.string("price must be a string"),
  category: z.string("category must be a string").min(2).nullable().optional(),
  image: z.string().url(),
  // gender: z.any("gender must be a string"),
});

export const useSubmitForm = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // username: "oslim",
    },
  });
  async function onSubmit(data) {
    // console.log(data);

    try {
      const res = await fetch("http://localhost:4000/api/v1/createProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataRes = await res.json();
      console.log(dataRes);
      // alert("product created success");
      toast({
        title: "Success ✅✅",
        description: "product created successfully",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { onSubmit, form };
};
