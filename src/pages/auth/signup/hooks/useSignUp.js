import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  gender: z.enum(["male", "female"]).optional(),
  phone: z.string().nonempty("Phone number is required"),
});

export const useSignUp = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setisLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/signup",
        data
      );
      toast({
        title: "Success",
        description: `${res?.data?.firstName} Welcome to Our Website pls login`,
      });
      if (res.data) {
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
};
