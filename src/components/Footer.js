import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='space'></div>
        <div className="container">
            <div className='footer-top'>
                <div id="footer-img">
                    <img src="Images/Footer-img/cooking-girl.jpg" alt="" />
                    <div className="subscribe">
                        <p>Sign up for FREE quick and easy weeknight dinners delivered right to your inbox!
                            You'll receive new recipes as soon as they are published, plus our top 12 recipes
                            free!
                        </p>
                        <input type="text" placeholder='Subscribe!'/>
                        <button type='submit'>Subscribe</button>
                    </div>
                </div>
                <div id='footer-links'>
                    <div>
                        <h3> <Link> PARTNERSHİP </Link> </h3>
                        <ul className='footer-ul'>
                            <li>
                                <Link> Websites </Link>
                            </li>
                            <li>
                                <Link> Social Media </Link>
                            </li>
                            <li>
                                <Link> Branding </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3> <Link> ABOUT </Link> </h3> 
                        <ul className='footer-ul'>
                            <li>
                                <Link> Our Projects </Link>
                            </li>
                            <li>
                                <Link> Careers </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3> <Link> SUPPORT </Link> </h3>
                        <ul  className='footer-ul'>
                            <li>
                                <Link> Support Request </Link>
                            </li>
                            <li>
                                <Link> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <hr className='footer-hr'/>
                <div className='footer-rights'>
                    <p>©CopyRight All rights reserved.</p>
                    <div className='social-links'>
                        <Link><i className="fa-brands fa-twitter tw"></i></Link>
                        <Link><i className="fa-brands fa-instagram ins"></i></Link>
                        <Link><i className="fa-brands fa-facebook face"></i></Link>
                        <Link><i className="fa-brands fa-youtube yt"></i></Link>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer