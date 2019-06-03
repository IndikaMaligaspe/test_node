import React from "react"
import {render} from "react-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'


render (
   <div>
   	<Navbar/>
           <p className="h1">  Hey babe , I am a REACT dude </p>
        <Footer/>
   </div>
 , document.getElementById("app")	

)

