import React,{createContext,useReducer,useEffect} from 'react'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from '../src/screens/Home'
import Profile from '../src/screens/Profile'
import Signup from '../src/screens/Signup'
import Signin from '../src/screens/Signin'
import CreatePassword from './screens/createPassword'
import './App.css';
import {reducer,InitialState} from './reducers/userReducers'


export const UserContext=createContext()


const Routing = ()=>{
    
    const history=useHistory()

  useEffect(()=>{
      const user=JSON.parse(localStorage.getItem('user'))
      console.log(user);

      if(user)
      {
          history.push('/')
      }
       else{
           history.push('signin')
       }
       
  },[])

    return(

        <Switch>
             <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/profile">
            <Profile />
        </Route>

        <Route exact path="/signin">
            <Signin />
        </Route>

        <Route exact path="/signup">
            <Signup />
            
        </Route>

        <Route exact path="/createPassword">
            <CreatePassword />
        </Route>

       
        
       
        </Switch>


    );
}

const App=()=>{
    const [state,dispatch] = useReducer(reducer,InitialState)
    
  return(
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
      <Routing />
    
    </BrowserRouter>
    </UserContext.Provider>
   
  );
}
export default App