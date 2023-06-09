import React from 'react';

import { Field, ErrorMessage } from 'formik';

import styles from './Input.module.css';

export interface InputProps {
    label: string;
    name: string;
    type?: string;
    as?: string,
    errors?: string;
    touched?: boolean;
    className?: string,
    children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, name, type='text', as, errors, touched, children, className}) => {
    return (
        <fieldset className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <Field 
                type={type} 
                name={name}
                as={as ? as : undefined}
                className={`${className ? className : styles.input} ${touched && errors && styles.error}`}>
                {children}
            </Field>
            <ErrorMessage name={name} component="div" className={styles.errorMg} />
        </fieldset>
    );
};

export default Input;