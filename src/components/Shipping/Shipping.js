import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from "../../context/useAuth";
import './Shipping.css';

const Shipping = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    
    const {user} = useAuth()
    
    return (
    <div>
    <h1>this is shipping component</h1>

      <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      <input defaultValue="north virginia" {...register("address")} />
      <input defaultValue="+8801723146362" {...register("phone")} />

      {errors.exampleRequired && <span className='error'>This field is required</span>}
      
      <input type="submit" />
    </form>
    </div>
    );
};

export default Shipping;