
import './App.css'
import Login from './components/Login'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  //<UserContextProvider></UserContextProvider>
  //or
  //<UserContext.Provider value></UserContext.Provider>
  return (
    <UserContextProvider>
      <h2>hello</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
