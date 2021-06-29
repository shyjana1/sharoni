// import React from 'react'
// import './Header.css'
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import homeImg from '../../images/logo.jpg'
// import { Link } from 'react-router-dom'
// import { useStateValue } from '../../StateProvider'
// import { auth } from '../../firebase';
// import CheckoutProduct from '../../components/Checkout/CheckoutProduct/CheckoutProduct'

// function Header() {
//     const [{basket, authUser, isSignIn,searchItems,setSearchItems}, dispatch] = useStateValue('');
//     console.log("my new header user is", authUser);
    
//     console.log('1 user is logged in: ' , isSignIn);
//     // console.log("email is" + authUser.email);

//     const handleAuthentication = () => {
//         if (isSignIn === true) {
//             auth.signOut().then(() =>{
//                 // console.log(isSignIn);
//                 dispatch({
//                     type: 'SET_USER',
//                     payload: false
//                   })
//                 console.log("user has signed out");
//                     console.log(isSignIn);
//             })
//         }
//     }
//     // console.log('new ' , user)
//     return (
//         <>
//         <div className="header">
//         <Link to='/'>
//             <img className="header_logo" src={homeImg} />
//         </Link>
        
//         <div className="header_search">
//             <input className="header_searchInput" type="text" placeholder="Search..." onChange=
//             {(event) =>{setSearchItems(event.target.value)}} />
//                     {/* {basket.map(item =>(
//                         <CheckoutProduct
//                         id={item.id}
//                         title={item.title}
//                         image={item.image}
//                         price={item.price}
//                         rating={item.rating}
//                     />
//                     ))}
//                      */}
                    
                        
//             <SearchIcon className="header_searchIcon" />
//         </div>

//         <div className="header_nav">
//             <Link to={ '/login'}>
//                 <div onClick={handleAuthentication} className="header_option">
//                     <span className="header_optionLineOne"> Hello {!isSignIn ? 'Guest' : authUser.email.split("@")[0]}</span>
//                     <span className="header_optionLineTwo"> {isSignIn ? 'Sign out' : 'Sign In'} </span>
//                 </div>
//             </Link>
//             <div className="header_option">
//                 {/* <span className="header_optionLineOne"> Returns</span>
//                 <span className="header_optionLineTwo"> & Orders</span> */}

//             </div>
//             <div className="header_option">
//                 {/* <span className="header_optionLineOne"> Your</span>
//                 <span className="header_optionLineTwo"> Prime</span> */}

//             </div>
//             <Link to='/checkout'>
//             <div className="header_optionBasket">
//                 <ShoppingBasketIcon />
//                 <span className="header_optionLineTwo header_basketCount"> {basket?.length}</span>
//             </div>
//             </Link>
//         </div>
//     </div>
        
//     </>
//     )
// }

// export default Header
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import homeImg from '../../images/logo.jpg'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase';
import CheckoutProduct from '../../components/Checkout/CheckoutProduct/CheckoutProduct'

function Header() {
    const [{basket, authUser, isSignIn,searchItems, filteredProducts }, dispatch] = useStateValue('');

        console.log("this is the filtered p" , filteredProducts);
    console.log("my new header user is", authUser);
    
    console.log('1 user is logged in: ' , isSignIn);


    const handleAuthentication = () => {
        if (isSignIn === true) {
            auth.signOut().then(() =>{
                // console.log(isSignIn);
                dispatch({
                    type: 'SET_USER',
                    payload: false
                  })
                console.log("user has signed out");
                    console.log(isSignIn);
            })
        }
    }
    // console.log('new ' , user)
    const setSearchItems = (value) => {

            dispatch({type: "SET_FILTERED_PRODUCT", payload: value})

    }

    return (
        <>
        <div className="header">
        <Link to='/'>
            <img className="header_logo" src={homeImg} />
        </Link>
        
        <div className="header_search">
            <input className="header_searchInput" type="text" placeholder="Search..." onChange=
            {(event) =>{setSearchItems(event.target.value)}} />
                   
                        
                    
                    
                        
            <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
            <Link to={ '/login'}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne"> Hello {!isSignIn ? 'Guest' : authUser.email.split("@")[0]}</span>
                    <span className="header_optionLineTwo"> {isSignIn ? 'Sign out' : 'Sign In'} </span>
                </div>
            </Link>
            <div className="header_option">
                {/* <span className="header_optionLineOne"> Returns</span>
                <span className="header_optionLineTwo"> & Orders</span> */}

            </div>
            <div className="header_option">
                {/* <span className="header_optionLineOne"> Your</span>
                <span className="header_optionLineTwo"> Prime</span> */}

            </div>
            <Link to='/checkout'>
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount"> {basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
        
    </>
    )
}

export default Header

