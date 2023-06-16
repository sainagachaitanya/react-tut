import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const Form = () => {

  const schema = yup.object().shape({
    fullname: yup.string().required("Full Name is Required"),
    email: yup.string().email().required("Email is Required"),
    age: yup.number().positive().integer().min(18).required("Age is Required, Min: 18"),
    password: yup.string().min(4).max(20).required("Password is Required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required()
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullname")} />
      <p>{errors.fullname?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="text" placeholder="Password..." {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="text" placeholder="Confirm Password..." {...register("confirmpassword")} />
      <p>{errors.confirmpassword?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;