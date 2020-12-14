import React from 'react';
import './index.css';
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../../molecules/inputField";
import { useState } from 'react';
import { Button } from '../../atoms/button';
import {useAuthentication} from "../../../hooks/authentication";
import { Redirect, useLocation } from "react-router-dom";

export const LoginForm = ({}) => {
    // const { login, isAuthenticated } = useAuthentication();
    const location = useLocation();

    // const onSuccess = ({username, password}) => {
    //     login(username, password);
    // };


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
                     <label className="welcome">Welcome</label>
                 </div>
                 <div className='form-item'>
                     <InputField
                         type="text"
                         name="userName"
                         label="Username"
                         id="user-name"
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
                         fieldRef={register({
                             required: {
                                 value: true,
                                 message: 'Password is required',
                             }
                         })}
                     >
                     </InputField>
                 </div>
                 <Button>Log in</Button>
             </form>
        </FormProvider>
     </>
    );
}