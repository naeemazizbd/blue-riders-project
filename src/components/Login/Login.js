import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleGithubSignIn } from '../Login/LoginManager';


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };



  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const githubSignIn = () => {
    handleGithubSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

  return (
    <div className="app   ">
      <div className="row mt-5 d-flex justify-content-center ">
        <div className="col-md-4  mt-5 d-flex justify-content-center bg-light shadow">
          <div className=" mt-4 ">
            <h3> Login/Create Account </h3>

            {
              user.isSignedIn && <div>
                <p>Welcome, {user.name}!</p>
                <p>Your email: {user.email}</p>
                <img src={user.photo} alt="" />
              </div>
            }

            <form onSubmit={handleSubmit} className=" " action="">
              {newUser && <input className="form-control " name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
              <br />
              <input className="form-control " type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
              <br />
              <input className="form-control " type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
              <br />
              <div className=" d-flex justify-content-center m-3 ">
                <input className="bg-primary   form-control text-white " type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
              </div>
              <div className="p-3">
                <p>Are you new user? Please</p>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label className="ms-2" htmlFor="newUser">Create a new account</label>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-4  mt-5 d-flex justify-content-center  ">
          <div className="mt-5">
            <h3>Direct Login</h3>
            <h5>Are You Lazy! Please Click One Option</h5>
            <div className="d-flex justify-content-center mt-4 w-75 mx-5 rounded  p-1 align-items-center bg-warning">
              {user.isSignedIn ?
                <div onClick={signOut} className=""><i className="fab fa-google-plus-square  text-success  fa-2x"> </i> <span className="mx-4 text-white">Continue with Google</span> </div> :
                <div onClick={googleSignIn} className=""><i className="fab fa-google-plus-square text-danger  fa-2x"></i> <span className="mx-4 text-white">Continue with Google</span></div>
              }
            </div>
            <div onClick={fbSignIn} className="d-flex justify-content-center mt-4 w-75 mx-5 rounded  p-1 align-items-center bg-primary">
              <i className="fab fa-facebook-square text-white  fa-2x"> </i>
              <span className="mx-4 text-white">Continue with Facebook</span>
            </div>

            <div onClick={githubSignIn} className="d-flex justify-content-center mx-5 mt-4 w-75  rounded  p-1 align-items-center bg-dark">
              <i className="fab fa-github-square text-white  fa-2x"></i>
              <span className="mx-4 text-white">Continue with Github</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;