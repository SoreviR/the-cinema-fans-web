'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

const FormTest = () => {

    

    const {
        register,
        handleSubmit,
      } = useForm()
      const onSubmit = (data: any) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue="test" {...register("example")} />

    <input {...register("exampleRequired")} />

    <input type="submit" />
    </form>
  )
}

export default FormTest