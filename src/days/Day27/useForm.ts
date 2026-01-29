import { useState } from 'react';

type ValidationErrors = Record<string, string>;
type TouchValidation = Record<string, boolean>;

const useForm = <T extends Record<string, unknown>>(initialValues: T, validate: (values: T) => ValidationErrors) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [touched, setTouched] = useState<TouchValidation>({});

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));

        const validationErrors = validate(values);
        setErrors(validationErrors);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);

        const allTouched = Object.keys(values).reduce(
            (acc, key) => {
                acc[key] = true;
                return acc;
            },
            {} as Record<string, boolean>,
        );
        setTouched(allTouched);

        if (Object.keys(validationErrors).length === 0) {
            console.log('submitting:', values);
        }
    };
    return { values, errors, touched, handleChange, handleBlur, handleSubmit };
};

export default useForm;
