import React from "react";
import HotelContent from "../components/HotelContent";
import Location from "../components/location";
import Buyticket from "../components/Buyticket";
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import Meals from '../components/Meals';
import Vision from '../components/Vision';
import Athlet1 from "../components/Athlet1";
import Athlet2 from "../components/Athlet2";
import Sponsor from "../components/Sponsor";


const Layout = () => {
    return (<div>

        < Navbar />
        < Header />
        < Buyticket />
        < Location />
        <Meals />
        <Vision />
        <Athlet1 />
        <Athlet2 />
        <Sponsor />
    </div>)
}


export default Layout