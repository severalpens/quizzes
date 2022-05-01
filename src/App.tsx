/* src/App.js */
import "reflect-metadata";
import {Outlet} from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}


export default App