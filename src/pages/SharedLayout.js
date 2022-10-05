import React from "react"
import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom"
import { ThemeContextProvider } from "../context/Theme-context"
import Footer from "../components/Footer"



export default function SharedLayout(){
    return(
        <div >
            <ThemeContextProvider>
                <Navbar/>
                <Outlet />   
                <Footer />
            </ThemeContextProvider>
        </div>
    )
}