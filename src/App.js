import React from "react"
import "./style.css"
import { Routes, Route} from "react-router-dom"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import About from "./pages/About"
import SharedLayout from "./pages/SharedLayout"
import Error from "./pages/Error"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App(){

    return(
       <Routes >
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Work />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Route>
       </Routes>
    )
}