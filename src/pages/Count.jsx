import React from "react";
import HotelContent from "../components/HotelContent";
import Location from "../components/location";
import Buyticket from "../components/Buyticket";
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import Meals from '../components/Meals';
import Vision from '../components/Vision';



const Layout = () => {
    return (<div>

        < Navbar />
        < Header />
        < Buyticket />
        < Location />
        <Meals />
        <Vision />

    </div>)
}


export default Layout