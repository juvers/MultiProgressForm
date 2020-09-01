import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const Step1 = () => {
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        history.push('/step2');

    }
    return (
        <>
            <div>Step 2</div>
            <form>
                <input ref={register} name="firstName" type="text" placeholder="First Name" />
                <input ref={register} name="lastName" type="text" placeholder="Last Name" />
                <button type="submit">Next</button>
            </form>
        </>
    )
}


export default Step1;

