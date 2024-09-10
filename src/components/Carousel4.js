import React, { useEffect, useState } from 'react'
import logoi from '../images/brands/jw1.jpg';
import logoi1 from '../images/brands/jw2.jpg';
import logoi2 from '../images/brands/hermes.png';
import logoi4 from '../images/brands/louisvuitton.png';
import logoi5 from '../images/brands/jw3.jpg';
import logoi6 from '../images/brands/jw4.jpg';
import logo1 from '../images/Banner/banner5.jpg'
import logo2 from '../images/Banner/banner4.jpg'
import logo6 from '../images/Banner/banner2.jpg';
import logo7 from '../images/Banner/banner1.jpg';
import logo8 from '../images/Banner/banner3.jpg';
import logoa from '../images/jewelry/jewelry1.jpg'
import logob from '../images/jewelry/jewelry3.jpg'
import logoc from '../images/jewelry/jewelry5.jpg'
import logod from '../images/jewelry/jewelry8.jpg'
import logoe from '../images/jewelry/jewelry2.jpg'
import logof from '../images/jewelry/jewelry4.jpg'

const homeData = [
    {
        id: 1,
        name: "Gadget",
        image: logoi1
    },
    {
        id: 2,
        name: "Man Cloth",
        image: logoi
    },
    {
        id: 3,
        name: "Woman Cloth",
        image: logoi2
    },
    {
        id: 4,
        name: "Phone",
        image: logoi6
    },
    {
        id: 5,
        name: "Laptop",
        image: logoi4
    },
    {
        id: 6,
        name: "Tablet",
        image: logoi5
    },
];

const Carousel4 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [exitingIndex, setExitingIndex] = useState(null);

    const products = [
        {
            id: 1,
            imgSrc: logoa,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            price: '$99.99'
        },
        {
            id: 2,
            imgSrc: logob,
            title: "Solid Gold Petite Micropave",
            price: '$149.99'
        },
        {
            id: 3,
            imgSrc: logoc,
            title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
            price: '$199.99'
        },
        {
            id: 4,
            imgSrc: logod,
            title: "MBJ Women's Solid Short Sleeve Boat Neck V",
            price: '$109.99'
        },
        {
            id: 5,
            imgSrc: logoe,
            title: "Opna Women's Short Sleeve Moisture",
            price: '$119.99'
        },
        {
            id: 6,
            imgSrc: logof,
            title: "DANVOUY Womens T Shirt Casual Cotton Short",
            price: '$119.99'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [products.length]);

    return (
        <div>
            <div className='container-fluid'>
                <div className='row my-3'>
                    <div className='col-lg-6 col-sm-12 my-5'>
                        <div id="demo" class="carousel slide mt-4" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                            </div>
                            <div class="carousel-inner rounded-pill">
                                <div class="carousel-item containo active ">
                                    <img src={logo6} alt="Laptop From Albania" class="d-block w-100" style={{ objectFit: 'fill' }} />
                                </div>
                                <div class="carousel-item containo">
                                    <img src={logo7} alt="Chicago" class="d-block  w-100" style={{ objectFit: 'fill' }} />
                                </div>
                                <div class="carousel-item containo">
                                    <img src={logo2} alt="Chicago" class="d-block  w-100" style={{ objectFit: 'fill' }} />
                                </div>
                                <div class="carousel-item containo">
                                    <img src={logo8} alt="New York" class="d-block  w-100" style={{ objectFit: 'inherit' }} />
                                </div>
                                <div class="carousel-item containo">
                                    <img src={logo1} alt="New York" class="d-block w-100" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>

                    <div className='col-lg-6 col-sm-12'>
                        <h2 className="text-center">Our Products</h2>
                        <div class="my-3 mx-auto hrr col-6-sm"></div>
                        <div id="accordion" class="row-cols-1 my-5">
                            <div class="card shadow-lg mb-3 ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsibleOne" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsibleOne" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the o...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible2" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        Solid Gold Petite Micropave
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible2" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez ..
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible3" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        Pierced Owl Rose Gold Plated Stainless Steel Double
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible3" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Rose Gold Plated Double Flared Tunnel Pl...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible4" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        White Gold Plated Princess
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible4" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible5" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        DANVOUY Womens T Shirt Casual Cotton Short
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible5" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft a
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-7 col-sm-12'>
                        <h2 style={{ textAlign: "center", color: "#2c4964" }} className='mt-3'>Brands</h2>
                        <div class="my-3 mx-auto hrr "></div>
                        <div className=' my-3 d-flex row' >
                            {homeData.map((item) => (
                                <div className='my-3 containo col-lg-2 col-sm-4' key={item.id} style={{ height: '120px', textAlign: "center" }}>
                                    <img src={item.image} alt={item.name} style={{ height: 'inherit' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-12'>
                        <div className="container my-3">
                            <div className="product-container">
                                <div className="card product-card active border-0 ">
                                    <img src={products[currentIndex].imgSrc} className="card-img-top product-img rounded-circle" alt={products[currentIndex].title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{products[currentIndex].title}</h5>
                                        {/* <p className="card-text fw-bold">Price: {products[currentIndex].price}</p> */}
                                        {/* <a href="#" className="btn btn-primary">Buy Now</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel4;