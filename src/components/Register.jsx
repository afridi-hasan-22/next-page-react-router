import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser, verification } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        toast.success('Registration successfull');
        form.reset()
      })
      .catch((error) => {
        console.log(error.message);
        toast.error('Registration failed');
      });
  };
  return (
    <div className='my-container'>
      <div className='flex justify-center items-center h-screen'>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Enter your name'
              name='name'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email Address
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Enter your email'
              name='email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='********'
              name='password'
              required
            />
          </div>
          <div className='flex items-center justify-between mb-4'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Register
            </button>
          </div>
          <div className='text-gray-700 text-sm'>
            <p>Or register with:</p>
            <div className='flex mt-2'>
              <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline'>
                Google
              </button>
              <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                GitHub
              </button>
            </div>
          </div>
          <p className='text-center mt-4'>
            Already have an account ? please{' '}
            <span className='text-blue-500'>
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
