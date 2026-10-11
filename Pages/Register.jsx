import { useForm } from "react-hook-form";

export default function Register() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const submitForm = (data) => {
        alert('Registration Successful');
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="text"
                placeholder="Enter name"
                {...register("name", {
                    required: "Name is mandatory"
                })}
            /> <br />
            {errors.name && (<p>{errors.name.message}</p>)}

            <input type="number"
                placeholder="Enter age"
                {...register("age", {
                    required: "Age is mandatory",
                    min: {
                        value: 18,
                        message: "Age should br 18 at least"
                    }
                })}
            /> <br />
            {errors.age && (<p>{errors.age.message}</p>)}

            <input type="email"
                placeholder="Enter email"
                {...register("email", {
                    required: "Email is mandatory",
                    pattern: {
                        value: /^[A-Za-z0-9]+@gmail\.com$/,
                        message: "Email should be gmail address"
                    }
                })}
            /> <br />
            {errors.email && (<p>{errors.email.message}</p>)}

            <input type="password"
                placeholder="Enter password"
                {...register("password", {
                    required: 'Password is mandatory',
                    minLength: {
                        value: 8,
                        message: 'Min 8 Characters required'
                    }
                })}
            /> <br />
            {errors.password && (<p>{errors.password.message}</p>)}

            <button type="submit">Register</button>
        </form>
    )
}
