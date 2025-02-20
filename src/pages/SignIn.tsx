import React, { useState }  from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    dispatch(signInStart());
    try {
      const response = await axios.post('/api/userService/auth/signin', { email, password });
      dispatch(signInSuccess(response.data));
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl mb-4">Sign In</h2>
      <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button onClick={handleSignIn} className="w-full bg-blue-600 text-white p-2 rounded">Sign In</button>
      </div>
    </div>
  );
}

export default SignIn