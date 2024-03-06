import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white ">
                <img src="/assets/bg.jpg" className="card-img" alt="background" height="600px" />
                <div className="container">
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 className="card-title display-3 fw-bolder mb-0 text-black">NEW SEASON ARRIVALS</h5>
                        <p className="card-text text-black">
                            CHECK OUT ALL THE TREANDS
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home