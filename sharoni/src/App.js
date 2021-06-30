import React, {useEffect, useState} from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Payment from './components/Payment/Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'  
import { Container, Row, Col } from 'react-bootstrap'
const promise = loadStripe(
  'pk_test_51J6dsACzWUb0lflcH5ArwPyrHg5vTargnHQ7dcx2mhuoMgl75CYPq8D4VQyjiomCDN02iX93rfkbzgBfLoheXl5A00Mv9AvFDA'
  );
function App() {
  const [{}, dispatch] = useStateValue()
  const [isSignIn, setIsSignIn,] = useState(false)

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS: ', authUser, '!');
      console.log("test " + authUser.email);

      if (authUser){
        setIsSignIn(true)
          

        dispatch({
          type: 'SET_USER',
          payload: true,
          authUser: authUser,
        })
      } else {
        dispatch({

          type: 'SET_USER',
          payload: false,
          authUser: null
        })
      }
    })
  },[])
  
  return (
    <Router >
    <div className="App">
      <Switch>
          
          <Route path='/checkout'>
              <Header />
             <Checkout /> 
          </Route>
          <Route path='//'>
             <Header />
             <Home />
          </Route>
          <Route path='/payment'>
             <Header />
             <Elements stripe={promise}>
                <Payment />
             </Elements>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
