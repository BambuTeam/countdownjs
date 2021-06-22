import React from "react";
import Location from "../components/location";
import Buyticket from "../components/Buyticket";
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import Meals from '../components/Meals';
import Vision from '../components/Vision';
import Athlet1 from "../components/Athlet1";
import Athlet2 from "../components/Athlet2";
import Sponsor from "../components/Sponsor";
import Buyticket2 from "../components/Buyticket2";
import Contact from "../components/Contact";
import Ticketsale from "../components/Ticketsale";


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
        <Buyticket2 />
        <Contact />
        <Ticketsale />
    </div>)
}


export default Layout