import { useState } from 'react';

export const useForm = (initialState, cb) => {
  const [values, setValues] = useState(initialState);

  const handleReset = () => setValues(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    cb();
  };

  return [values, handleChange, handleSubmit, handleReset];
};
