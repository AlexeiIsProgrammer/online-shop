import React, { useState } from 'react'
import '../styles/App.scss';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

  export default function ValidationModal({isOpen, setIsOpen, setBasketItems}){
    
    const navigate = useNavigate()
    const [isClicked, setIsClicked] = useState(true)
    const [counter, setCounter] = useState(5)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
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
                <input {...register("name_surname",{required: true, pattern: /^[A-Za-zA-Яа-я]+$/i, pattern: /^\S\w{2,10} \S\w{3,10}$/i})} type="text" placeholder='name&surname'/>
                {errors.name_surname && <p>Please check the name_surname</p>}
                <input type="number" {...register("telephone", {required: true,pattern:/^(\+)[\d\-\(\)]{9}\d$/g})} placeholder='telephone'/>
                {errors.telephone && <p>Please check the telephone</p>}
                <input {...register("adress",{required: true, pattern: /^[A-Za-zA-Яа-я]+$/i, pattern: /^\S\w{5,10} \S\w{4,10} \S\w{4,10}$/i})} type="text" placeholder='adress'/>
                {errors.adress && <p>Please check the adress</p>}
                <input {...register("e_mail",{required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/})} type="text" placeholder='e_mail'/>
                {errors.e_mail && <p>Please check the e_mail</p>}
                <input type="number" {...register("num_card", {required: true,pattern:/^0-9/, pattern:/.{16}/ })} placeholder='num_card' />
                {errors.num_card && <p>Please check the num_card</p>}
                <input type="number" {...register("cvv", {required: true, pattern:/^0-9/, pattern:/.{3}/ })} placeholder='cvv'/>
                {errors.cvv && <p>Please check the cvv</p>}
                <input type="text" {...register("date_card", {required: true, pattern:/.{4}/, pattern:/^([0-1][0-2]) ([0-9][0-9])$/})} placeholder='date_card'/>
                {errors.date_card && <p>Please check the date_card</p>}
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