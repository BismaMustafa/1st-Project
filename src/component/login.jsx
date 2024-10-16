
import React, { useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, loginGoogle } from '../config/firebase';

function Login() {
    async function handleLogin() {
        const data = await signInWithPopup(auth, loginGoogle);
        console.log(data);
    }

    const [user] = useAuthState(auth);

    async function handleLogout() {
        const a = await signOut(auth);
        console.log(a);
    }

    const [firebaseUserInfo, setFirebaseUserInfo] = useState(auth.currentUser);

    return (
        <div>
            <div className="form">
            <form action="">
                <input type="email" placeholder='email' /><br />
                <input type="password" placeholder='password' /><br />
                <input type="submit" />
            </form>
            </div>
             <div className='login-display'>
            <button onClick={handleLogin}>Log in with Google</button><br></br><br></br>
            {user ? (
                <>
                    {/* <p>{user.displayName}</p>
                    <img src={user.photoURL} alt={user.displayName} /> */}

                    {/* <button onClick={handleLogout}>Log out</button> */}
                </>
            ) : (
                <button>Please log in.</button>
            )}
            </div>
        </div>
    );
}

export default Login;

