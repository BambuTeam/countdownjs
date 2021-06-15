import React from "react";
import Location from "../components/location";
import Buyticket from "../components/Buyticket";
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import Meals from '../components/Meals';




const Layout = () => {
    return (<div>
   
    < Navbar />
    < Header />
    < Buyticket />
    < Location />
    <Meals/>
        

    </div>)
}


export default Layout