import './App.css';
import 'firebase/firestore';
import 'firebase/auth';

import { auth } from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className='w-full h-screen flex flex-col  justify-around items-center  '>
      <div className='w-[90%] md:w-[50%] bg-[#FCF7F8] rounded-lg mt-20'>
        <section className=''>
          {user ? (
            <div className='flex flex-col   rounded-lg shadow-md'>
              <div className='p-4 flex justify-between items-center shadow-lg'>
                <div className='font-bold text-2xl p-2'>Chatter.</div>
                {auth.currentUser && (
                  <button
                    className='bg-red-400 hover:shadow-lg hover:bg-gray-400 text-white font-semi-bold py-2 px-4 rounded-lg inline-flex text-sm items-center gap-2 transition ease-in-out duration-150'
                    type='submit'
                    onClick={() => auth.signOut()}
                  >
                    <span>Sign Out</span>
                    <ArrowRightOnRectangleIcon className='w-5 h-5 ' />
                  </button>
                )}
              </div>
              <ChatRoom />
            </div>
          ) : (
            <div className='flex flex-col h-96 justify-around items-center'>
              <header className='flex flex-col justify-center items-center font-bold text-black'>
                <div className='text-2xl '>Welcome to</div>
                <span className='text-4xl '>Chatter.</span>
              </header>

              {/* <div className='border-t border-gray-800 flex-grow mr-3'></div> */}

              <div className='flex flex-col justify-center items-center gap-4'>
                <span className='text-md '>Sign in to continue</span>

                <SignIn />
              </div>
            </div>
          )}
        </section>
      </div>

      <div className=' text-[#FCF7F8] text-xs  flex  justify-center items-center'>
        <p> Created with love by Lotfi</p>
        <img src='/heart.png' className='w-8 h-8' alt='logo' />
      </div>
    </div>
  );
}

export default App;
