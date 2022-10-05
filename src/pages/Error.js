import React from "react"
import {Link } from "react-router-dom"
import "./page-style.css"

export default function Error(){
    return(
        <div className="error">
            <h1>ERROR 404</h1>
            <h3>page not found</h3>
            <Link to="/">back home</Link>
        </div>
    )
}