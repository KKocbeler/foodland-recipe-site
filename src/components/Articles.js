import React from 'react';
import './Articles.css'
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <>
        <div id='all-article'>
            <div id="articles">
                <h4><Link className='leads'> Articles </Link></h4>
                <div className="article">
                    <div className="article-left">
                        <img src="Images/articles-img/Cocunat-cake.jpg" alt="" />
                    </div>
                    <div className="article-right">
                        <h5>Cocunut Cake, Tom Cruise Gifts for Christmas</h5>
                        <p>
                        Hollywood stars look forward to receiving the 'Tom Cruise cake' during the holiday season.
                        This white chocolate and coconut Bundt cake is legendary, but you don't need to be an A-lister to enjoy a slice.
                        </p>
                        <p className='date-article'> Updated: Dec. 15, 2023</p>
                    </div>
                </div>
                <div className="article">
                    <div className="article-left">
                        <img src="Images/articles-img/Cocunat-cake.jpg" alt="" />
                    </div>
                    <div className="article-right">
                        <h5>Cocunut Cake, Tom Cruise Gifts for Christmas</h5>
                        <p>
                        Hollywood stars look forward to receiving the 'Tom Cruise cake' during the holiday season.
                        This white chocolate and coconut Bundt cake is legendary, but you don't need to be an A-lister to enjoy a slice.
                        </p>
                        <p className='date-article'> Updated: Dec. 15, 2023</p>
                    </div>
                </div>
                <div className="article">
                    <div className="article-left">
                        <img src="Images/articles-img/Cocunat-cake.jpg" alt="" />
                    </div>
                    <div className="article-right">
                        <h5>Cocunut Cake, Tom Cruise Gifts for Christmas</h5>
                        <p>
                        Hollywood stars look forward to receiving the 'Tom Cruise cake' during the holiday season.
                        This white chocolate and coconut Bundt cake is legendary, but you don't need to be an A-lister to enjoy a slice.
                        </p>
                        <p className='date-article'> Updated: Dec. 15, 2023</p>
                    </div>
                </div>
            </div>
            <div id="fav-recipes">
                <h4><Link className='leads'> Fav Recipes </Link></h4>
                <div className="ara">
                    <div className='fav-recipes__box'>
                        <Link>
                            <img src="Images/articles-img/fav-img.webp" alt="" />
                            <h5>OVEN-BAKED RIBS</h5>
                        </Link>
                    </div>

                    <div className='fav-recipes__box'> 
                        <Link>
                            <img src="Images/articles-img/fav-img.webp" alt="" />
                            <h5>OVEN-BAKED RIBS</h5>
                        </Link>
                    </div>

                    <div className='fav-recipes__box'> 
                        <Link>
                            <img src="Images/articles-img/fav-img.webp" alt="" />
                            <h5>OVEN-BAKED RIBS</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Articles