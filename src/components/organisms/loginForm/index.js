import React from 'react';
import './index.css';
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../../molecules/inputField";
import { AuthContext } from "../../../hooks/authContext";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';


export const LoginForm = ({}) => {
    const context = useContext(AuthContext);
    const { toggle, setToggle } = context;

    function onSucces() {
        console.log("succes")
    }

    const { register, unregister, watch, handleSubmit, ...methods } = useForm({
        mode: 'onChange'
    });

    const onError = (errorList) => {
        console.log(errorList)
    }

    return(
        <>
            <FormProvider {...methods} register={register} watch={watch} handleSubmit={handleSubmit}>
             <form onSubmit={handleSubmit(onSucces, onError)}>
                 <div className="form-header">
                     <h1 >Welcome</h1>
                 </div>
                 <div className='form-item'>
                     <InputField
                         type="text"
                         name="userName"
                         label="Username"
                         id="user-name"
                         value="Jhon-doe@gmail.com"
                         fieldRef={register({
                             required: {
                                 value: true,
                                 message: 'Username is required',
                             }
                         })}
                     > </InputField>
                 </div>
                 <div className="form-item">
                     <InputField
                         name="password"
                         label="Password"
                         type="password"
                         value="password123"
                         fieldRef={register({
                             required: {
                                 value: true,
                                 message: 'Password is required',
                             }
                         })}
                     >
                     </InputField>
                 </div>
                 <NavLink to="/" onClick={() => setToggle(!toggle)} className="login-button" >Log in</NavLink>
             </form>
        </FormProvider>
     </>
    );
}