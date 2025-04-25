import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';

export const Signuppage = () => {
  const passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      settinguser(values);
      navigate('/loginpage');
    },
    validationSchema: yup.object({
      email: yup.string().required('Email is required').email('Invalid email'),
      password: yup
        .string()
        .required('Password is required')
        .matches(passreg, 'Password must be 8+ characters, with upper, lower, number, and special char'),
    }),
  });

  const settinguser = (firstvalues) => {
    const user = JSON.parse(localStorage.getItem('users')) || [];
    const exist = user.some((user) => user.email === firstvalues.email);
    if (exist) {
      alert('User already exists!');
    } else {
      user.push(firstvalues);
      localStorage.setItem('users', JSON.stringify(user));
      alert('Registered successfully!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Sign up</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
          >
            Continue
          </button>

          <div className="text-sm text-center text-gray-600">
            Have an account?{' '}
            <Link to="/loginpage" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
