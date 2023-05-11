import React from 'react';
import { useForm } from 'react-hook-form';

function SimpleForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <label>
                First Name:
                <input
                    type="text"
                    {...register('firstName', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                    })}
                />
                {errors.firstName && <span>This field is required and should only contain letters</span>}
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    {...register('lastName', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                    })}
                />
                {errors.lastName && <span>This field is required and should only contain letters</span>}
            </label>
            <br />
            <label>
                Email:
                <input type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>This field is required & should only contain email</span>}
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;
