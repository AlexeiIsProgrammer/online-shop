import React from 'react'
import '../styles/App.scss';
import { useForm } from "react-hook-form";

  export default function ValidationModal(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
    <div className='validation-modal'>
        <div className='validation-modal__container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name&surname",{ pattern: /^[A-Za-z]+$/i })} type="text" placeholder='name&surname'/>
                <input type="number" {...register("age")} placeholder='age'/>
                <input {...register("adress",{ pattern: /^[A-Za-z]+$/i })} type="text" placeholder='adress'/>
                <input {...register("e_mail",{ pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/})} type="text" placeholder='e_mail'/>
                <input type="number" {...register("num_card", { min: 18, max: 99 })}placeholder='num_card' />
                <input type="number" {...register("cvv", { min: 18, max: 99 })} placeholder='cvv'/>
                {/* <input type="number" {...register("date_card", { min: 18, max: 99 })} placeholder='date_card'/> */}
                <button type='submit'>Send results</button>
            </form>
        </div>
    </div>
)
}

//  export default ValidationModal