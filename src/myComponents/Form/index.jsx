import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import GenericFormInputs from "@/shared/GenericFormInputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { inputs } from "./input";

const formSchema = z.object({
  title: z.string("title must be a string").min(2).max(20),
  description: z.string("description must be a string").min(2),
  price: z.string("price must be a string"),
  category: z.string("category must be a string").min(2).nullable().optional(),
  gender: z.any("gender must be a string"),
});

const FormCompo = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "oslim",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {inputs.map((elem, i) => (
          <GenericFormInputs key={i + elem.name} form={form} {...elem} />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormCompo;
