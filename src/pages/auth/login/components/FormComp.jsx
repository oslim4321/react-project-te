import { Form } from "@/components/ui/form";
import { useLogin } from "../hooks/useLogin";
import GenericFormInputs from "@/shared/GenericFormInputs";
import { Button } from "@/components/ui/button";

const FormComp = () => {
  const { inputs, form, onSubmit, isLoading } = useLogin();
  return (
    <div className="md:max-w-[500px] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {inputs.map((elem, i) => (
            <GenericFormInputs key={i + elem.name} form={form} {...elem} />
          ))}
          <Button disabled={isLoading} type="submit">
            {isLoading ? "loading..." : "log in"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComp;
