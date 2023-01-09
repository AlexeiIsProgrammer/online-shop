import React, { useState } from 'react'
import '../styles/App.scss';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

  export default function ValidationModal({isOpen, setIsOpen, setBasketItems}){
    const navigate = useNavigate()
    const [isClicked, setIsClicked] = useState(true)
    const [counter, setCounter] = useState(5)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setIsClicked(false)
        let counterLocal = 5
        const intVal = setInterval(() => {
            --counterLocal
            setCounter(counterLocal)
            if(counterLocal === 0) {
                setIsOpen(false)
                setIsClicked(true)
                setCounter(5)
                localStorage.removeItem('basket')
                setBasketItems([])
                clearInterval(intVal)
                navigate('/main')
            }
        }, 1000)
    };

    return (
    <div className={`validation-modal ${isOpen ? 'active' : ''}`}>
        <div className='validation-modal__container'>
            {
                isClicked
                ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name&surname",{ pattern: /^[A-Za-z]+$/i })} type="text" placeholder='name&surname'/>
                    <input type="number" {...register("age")} placeholder='age'/>
                    <input {...register("adress",{ pattern: /^[A-Za-z]+$/i, oninvalid: () => console.log("working!")} )} type="text" placeholder='adress'/>
                    <input {...register("e_mail",{ pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/})} type="text" placeholder='e_mail'/>
                    <input type="number" {...register("num_card", { min: 18, max: 99 })} placeholder='num_card' />
                    <input type="number" {...register("cvv", { min: 18, max: 99 })} placeholder='cvv'/>
                    {/* <input type="number" {...register("date_card", { min: 18, max: 99 })} placeholder='date_card'/> */}
                    <button type='submit'>Send results</button>
                </form>
                :
                <h1>
                    Окно закроется через: {counter}...
                </h1>
            }
        </div>
    </div>
)
}

//  export default ValidationModal