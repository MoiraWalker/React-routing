import React from 'react';
import './index.css';
import { useFormContext } from "react-hook-form";
import { Label, Input, ErrorMessage } from '../../atoms';

export const InputField  = ({label, name,fieldRef, type }) => {
    const { errors } = useFormContext();
    return(
        <div className="input-field">
            <Label name={name}>{label}</Label>
            <Input
                type={type}
                name={name}
                fieldRef={fieldRef}
            ></Input>
            {errors[name] && ( <ErrorMessage>{errors.name.message() || "Error "}</ErrorMessage>)}
        </div>
    );
};