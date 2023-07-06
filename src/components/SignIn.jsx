import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <button
        className='bg-red-400 hover:bg-gray-400 text-white font-semi-bold py-2 px-4 rounded-lg inline-flex text-sm items-center gap-2'
        type='submit'
        onClick={signInWithGoogle}
      >
        <span>Sign in with Google</span>
        <img className='w-5 h-5 ' src='/google.png' alt='google' />
      </button>
    </div>
  );
};

export default SignIn;
