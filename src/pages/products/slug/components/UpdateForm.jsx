import React from 'react'
import { inputs } from "@/myComponents/Form/input";
import GenericFormInputs from "@/shared/GenericFormInputs";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {useUpdateProduct} from '../hooks/useUpdateProduct'


const UpdateForm = ({product}) => {
  
    const {form, onSubmit, isLoading} = useUpdateProduct(product)
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            {
        inputs.map((elem, i)=>{
            return(
                <GenericFormInputs {...elem} key={i} form={form} />
            )
        })
      }
          <Button disabled={isLoading} type="submit">{isLoading ? 'loading...' : 'Update product'}</Button>
        </form>
        </Form>
    </div>
  )
}

export default UpdateForm
