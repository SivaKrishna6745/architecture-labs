import useForm from './useForm';

type InputType = {
    email: string;
    password: string;
};

const Day27 = () => {
    const validate = (values: InputType) => {
        const errors: Record<string, string> = {};
        if (!values.email) errors.email = 'Email is Required.';
        else if (!values.password) errors.password = 'Password is Required.';
        else if (values.password.length < 8) errors.password = 'Password cannot be less than 8 characters.';
        return errors;
    };
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm<InputType>(
        { email: '', password: '' },
        validate,
    );

    return (
        <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit}>
            <div className="flex gap-4 items-center">
                <label htmlFor="email" className="text-xl">
                    Email:
                </label>
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="px-0.5 py-1 text-lg rounded-sm border-2 border-slate-600 min-w-sm "
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors?.email && touched?.email && <div className="text-sm text-red-400">{errors?.email}</div>}
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <label htmlFor="password" className="text-xl">
                    Password:
                </label>
                <div className="flex flex-col gap-2">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="px-0.5 py-1 text-lg rounded-sm border-2 border-slate-600 min-w-sm "
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors?.password && touched?.password && (
                        <div className="text-sm text-red-400">{errors?.password}</div>
                    )}
                </div>
            </div>
            <button
                type="submit"
                className="cursor-pointer px-8 py-2 text-lg bg-blue-500 rounded-sm hover:bg-blue-400 active:scale-95"
            >
                Submit
            </button>
        </form>
    );
};

export default Day27;
