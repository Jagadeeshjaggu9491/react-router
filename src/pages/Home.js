// src/pages/Home.js
import React from 'react';
import Hero_Video from '../assets/hero-video.mp4';
import Pizza from '../assets/pizza.png'
import Burger from '../assets/burger.png'
import Chicken from '../assets/chicken.png'
import French_Fries from '../assets/french-fries.png'
import Long_Burger from '../assets/long-burger.png'

function Home() {
    return (
        <>
            {/* Hero Starts */}
            <div className='hero-main position-relative'>
                <video src={Hero_Video} loop autoPlay muted className='w-100' />
                <div className='hero-content position-absolute h-100 w-100 top-0 d-flex align-items-center p-md-5 p-3'>
                    <h1>Delicious Recipes <br /> <span className='text-warning' >Awaits</span> </h1>
                </div>
            </div>
            {/* Hero Ends */}
            {/* Category Starts */}
            <div className='category container-fluid py-4'>
                <div className='container'>
                    <div className='row cat-content my-3'>
                        <div className='col-md-6 cat-heading d-flex align-items-center text-end'>
                            <h2>Our <span className='text-warning'>Best</span> Delivered <br /> <span className='text-danger'>Categories</span></h2>
                        </div>
                        <div className='col-md-6 d-flex align-items-center '>
                            <p className='text-secondary mb-0'>Indulge in our most popular and delectable food categories, each curated to perfection for your culinary delight. From savory mains to sweet treats, we deliver excellence straight to your door.</p>
                        </div>
                    </div>
                    <div className='row d-flex align-items-center justify-content-center my-4 py-2'>
                        <div className='col-lg-3 col-md-4'>
                            <div className='cat-one'>
                                <img src={Pizza} alt='cat-img' className='img-fluid w-75 bg-warning py-5 px-3 rounded-circle' />
                                <div  className='text-center cat-one-content mt-3'>
                                <h5 className='fs-3 mb-0 fw-bold'>Pizza</h5>
                                <a href='#' className='text-decoration-none text-danger d-flex align-items-center justify-content-center'>Order Now <span className='mt-2'><i class="bi bi-arrow-right-short fs-4"></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <div className='cat-one'>
                                <img src={Burger} alt='cat-img' className='img-fluid w-75 bg-warning p-3 rounded-circle' />
                                <div  className='text-center cat-one-content mt-3'>
                                <h5 className='fs-3 mb-0 fw-bold'>Burger</h5>
                                <a href='#' className='text-decoration-none text-danger d-flex align-items-center justify-content-center'>Order Now <span className='mt-2'><i class="bi bi-arrow-right-short fs-4"></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <div className='cat-one'>
                                <img src={Chicken} alt='cat-img' className='img-fluid w-75 bg-warning py-4 px-3 rounded-circle' />
                                <div  className='text-center cat-one-content mt-3'>
                                <h5 className='fs-3 mb-0 fw-bold'>Chicken</h5>
                                <a href='#' className='text-decoration-none text-danger d-flex align-items-center justify-content-center'>Order Now <span className='mt-2'><i class="bi bi-arrow-right-short fs-4"></i></span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Catergory Ends */}
            {/* About Starts */}
            <div className='container-fluid py-3' >
            <div className='about-inner'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={French_Fries} className='w-50' alt='french' />
                    </div>
                    <div className='col-6'>
                        {/* <img src={Long_Burger} className='w-50' alt='french' /> */}
                    </div>
                </div>
            </div>
            </div>
            {/* About Ends */}

        </>
    );
}

export default Home;
