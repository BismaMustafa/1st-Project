import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
function Navbar() {
  const user = useAuthState(auth);
  async function handleLogout() {
    await signOut(auth);
  }
  return (
    <div>
      <nav>
        {user[0] === null ? (
          <>
            <h1>Navbar</h1>
          </>
        ) : (
          <>
            <img src={user[0]?.photoURL} alt="image1" width="70" height="70" />
            <h1>{user[0]?.displayName}</h1>
          </>
        )}

        <div className="nav">
          {/* <h1>Navbar</h1> */}
          <div className="nav-block">
            <Link to='/product' className="nav-items">Home</Link>
            <Link to='/about' className="nav-items">About</Link>
            <Link to='/home' className="nav-items">Contact</Link>
            {/* <Link to='/login' className="nav-items">Login</Link> */}
            {user[0] === null ? (
            <>
              <Link to="/login" className="nav-items">
                Login
              </Link>
            </>
          ) : (
            <>
            <button onClick={handleLogout} className="nav-item">
                Logout
              </button>
            </>
          )}
          <Link to="/post" className="nav-items">Post</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
