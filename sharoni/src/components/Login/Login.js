// import React from 'react'
// import './Login.css'
// import homeImg from '../../images/logo.jpg'
// import { Link , useHistory} from 'react-router-dom'
// import { auth } from '../../firebase'
// import {useState} from 'react'

// function Login() {
//     const history = useHistory()
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isSignIn, setIsSignIn] = useState(false)
//     const signIn = e=>{
//         e.preventDefault();
//         auth.signInWithEmailAndPassword(email, password)
//         .then((auth) =>{
//             console.log(auth);
//             if (auth) {
//                 history.push('/')

//             }
//             setIsSignIn(true)
//         })
//         .catch(err => {
//             console.log(err.message);
//         })
//     }
//     const register = e=>{
//         e.preventDefault();
//         // firebase register
//         auth.createUserWithEmailAndPassword(email, password)
//             .then((auth) =>{
//                 console.log(auth);
//                 if (auth) {
//                     history.push('/')
//                 }
//             })
//             .catch(err => {
//                 console.log(err.message);
//             })
//     }
//     return (
//         <div className="login">
//             <Link to='/'>
//             <img className="login_logo" src={homeImg} />
//             </Link>

//             <div className="login_container">
//                 <h1> Sign-in</h1>

//                 <form>
//                     <h5>Email</h5>
//                     <input type="text" value={email} onChange={e =>setEmail(e.target.value)}></input>
//                     <h5>Password</h5>
//                     <input type="password" value={password} onChange={e =>setPassword(e.target.value)}></input>
//                     <button type='submit' className="login_signInButton" onClick={signIn}> Sign In</button>
//                 </form>
//                 <p>Here's to those who wish us well... And those who don't can go to hell...
//                 By continuing, you agree to Sharoni's Conditions of Use and Privacy Notice.</p>

//                 <button className="login_registerButton" onClick={register}> New here? Register </button>
//             </div>
//         </div>
//     )
// }

// export default Login
import React from 'react'
import './Login.css'
import homeImg from '../../images/logo.jpg'
import { Link , useHistory} from 'react-router-dom'
import { auth } from '../../firebase'
import {useState} from 'react'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn, setIsSignIn] = useState(false)
    const signIn = e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
            console.log(auth);
            if (auth) {
                history.push('/')

            }
            setIsSignIn(true)
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    const register = e=>{
        e.preventDefault();
        // firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) =>{
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="login">
            <Link to='/'>
            <img className="login_logo" src={homeImg} />
            </Link>

            <div className="login_container">
                <h1> Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e =>setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e =>setPassword(e.target.value)}></input>
                    <button type='submit' className="login_signInButton" onClick={signIn}> Sign In</button>
                </form>
                <p>Here's to those who wish us well... And those who don't can go to hell...
                By continuing, you agree to Sharoni's Conditions of Use and Privacy Notice.</p>

                <button className="login_registerButton" onClick={register}> New here? Register </button>
            </div>
        </div>
    )
}

export default Login
