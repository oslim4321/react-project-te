import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { inputs } from "@/myComponents/Form/input";
import GenericFormInputs from "@/shared/GenericFormInputs";
import { useSubmitForm } from "../hooks/useSubmitForm";
// import { usePreviewImageURl } from "../hooks/usePreviewImageURl";

const FormCom = () => {
  const { onSubmit, form, handleChange, imageSrc } = useSubmitForm();

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {inputs.map((elem, i) => (
            <GenericFormInputs key={i + elem.name} form={form} {...elem} />
          ))}
          <div>
            <div className="flex">
              <input onChange={handleChange} type="file" className="" />
              <img
                className="w-[100px] h-[100px] rounded-full shadow object-cover"
                src={imageSrc}
                alt=""
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormCom;
