import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer>
        <div className="footerMain bg-slate-800  text-white">
            <div className="footerParts">
                <div className="sections flex place-content-around  ">
                    <div className="first ">
                        <div className="logoDiv">
                        <div className="logo">
                            logo
                            <img src="" alt="" />
                        </div>
                        <div className="desc ">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elinkt. Est, minima.</p>
                        </div>
                        </div>
                    </div>

                    <div className="second p-2 ">
                        <h3 className='text-xl'>Products</h3>
                        <div className="links flex flex-col ">
                            <Link to={"/"} >Men</Link>
                            <Link to={"/"} >Woman</Link>
                            <Link to={"/"} >Children</Link>
                            <Link to={"/"} >Electronic</Link>
                        </div>
                    </div>
                    <div className="third p-2 ">
                        <h3 className='text-xl' >Company</h3>
                        <div className="policys flex flex-col">
                            <Link to={"/"} >Help</Link>
                            <Link to={"/"} >FAQs</Link>
                            <Link to={"/"} >Terms & Condections</Link>
                            <Link to={"/"} >Contact Us</Link>
                            <Link to={"/"} >About Us</Link>
                            
                        </div>
                    </div>
                    <div className="fourth p-2 ">
                        <h3 className='text-xl'>Follow Us</h3>
                        <div className="socialMedia flex flex-col ">
                            <Link to={"/"} >Instagram</Link>
                            <Link to={"/"} >Facebook</Link>
                            <Link to={"/"} >Github</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>



    </>
  )
}

export default Footer