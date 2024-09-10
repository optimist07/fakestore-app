import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/electronic/electronic5.jpg';
import logo1 from '../images/laptops/lap2.jpg'
import logo2 from '../images/phone/phone1.jpg'
import logo3 from '../images/jewelry/jewelry6.jpg';
import logo7 from '../images/mancloth/men2.jpg';
import logo77 from '../images/mancloth/men1.jpg';
import logo8 from '../images/womencloth/mowen5.jpg';
import logo9 from '../images/womencloth/mowen1.jpg';
import { NavLink } from 'react-router-dom';

const homeData = [
    {
        id: 1,
        name: "Jewelry",
        image: logo3,
        path: '/jewelery'
    },
    {
        id: 2,
        name: "laptops",
        image: logo1,
        path: '/laptops'
    },
    {
        id: 3,
        name: "phones",
        image: logo2,
        path: '/phones'
    },
    {
        id: 4,
        name: "Phone",
        image: logo,
        path: '/electronics'
    },
    {
        id: 5,
        name: "Men Clothing",
        image: logo77,
        path: 'Men Clothing'
    },
    {
        id: 6,
        name: "Women Clothing",
        image: logo9,
        path: '/Women Clothing'
    },
];
const Home1 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    // const [exitingIndex, setExitingIndex] = useState(null);

    const products = [
        {
            id: 1,
            imgSrc: logo3,
            title: 'Elegant Sparkle Collection',
            price: '$99.99'
        },
        {
            id: 2,
            imgSrc: logo1,
            title: 'Powerhouse Laptops for Every Need',
            price: '$149.99'
        },
        {
            id: 3,
            imgSrc: logo2,
            title: 'Next-Gen Smartphones',
            price: '$199.99'
        },
        {
            id: 4,
            imgSrc: logo3,
            title: 'Chic & Stylish Women’s Apparel',
            price: '$109.99'
        },
        {
            id: 4,
            imgSrc: logo77,
            title: 'Modern Gentleman’s Wardrobe',
            price: '$119.99'
        },
        {
            id: 4,
            imgSrc: logo,
            title: 'Future Generation System',
            price: '$129.99'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [products.length]);


    return (
        <div>
            <div className='container-fluid mt-1'>
                <div className='row '>
                    <div className='col-lg-7 col-sm-12'>
                        <div id="demo" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                                {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button> */}
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item containo active">
                                    <NavLink to="/Men Clothing">
                                        <img src={logo7} alt="Chicago" class="d-block caro w-100" style={{ objectFit: 'contain' }} />
                                        <div class="carousel-caption text-dark shadow-lg ">
                                            <h3>Modern Gentleman’s Wardrobe</h3>
                                            <p>Elevate your style with our Modern Gentleman’s Wardrobe.</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="carousel-item containo">
                                    <NavLink to="/phones">
                                        <img src={logo2} alt="Chicago" class="d-block caro w-100" style={{ objectFit: 'fill' }} />
                                        <div class="carousel-caption shadow-lg text-secondary">
                                            <h3>Next-Gen Smartphones</h3>
                                            <p className='text-dark'>Stay connected with the future of communication through our Next-Gen Smartphones</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="carousel-item containo">
                                    <NavLink to="/Women Clothing">
                                        <img src={logo8} alt="New York" class="d-block caro w-100" style={{ objectFit: 'contain' }} />
                                        <div class="carousel-caption shadow-lg text-dark">
                                            <h3>Chic & Stylish Women’s Apparel</h3>
                                            <p>Step into the world of fashion with our Chic & Stylish Women’s Apparel.</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="carousel-item containo">
                                    <NavLink to="/laptops">
                                        <img src={logo1} alt="New York" class="d-block caro w-100" style={{ objectFit: 'fill' }} />
                                        <div class="carousel-caption shadow-lg text-secondary">
                                            <h4>Powerhouse Laptops for Every Need</h4>
                                            <p>Unleash your productivity with our range of Powerhouse Laptops.</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="carousel-item containo">
                                    <NavLink to="/jewelery">
                                        <img src={logo3} alt="New York" class="d-block caro w-100" style={{ objectFit: 'fill' }} />
                                        <div class="carousel-caption shadow-lg text-dark">
                                            <h3>Elegant Sparkle Collection</h3>
                                            <p> It is cover timeless elegance with our Sparkle Collection.</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon bg-secondary rounded-circle"></span>
                            </button>
                            <button class="carousel-control-next text-info" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon bg-secondary rounded-circle"></span>
                            </button>
                        </div>

                        <h2 style={{ textAlign: "center", color: "#2c4964" }} className='mt-3'>Categories</h2>
                        <div class="my-3 mx-auto hrr col-6-sm"></div>
                        <div className='row' style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {homeData.map((item) => (
                                <div className='my-3 containa col-lg-2 col-sm-4' key={item.id} style={{ }}>
                                    <NavLink to={item.path}><img src={item.image} alt={item.name} style={{}} /></NavLink>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='col-lg-5 col-sm-12'>
                        <h2 className="text-center">Our Products</h2>
                        <div class="my-3 mx-auto hrr col-6-sm"></div>
                        <div id="accordion" class=" my-3">
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsibleOne" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        Modern Gentleman’s Wardrobe
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsibleOne" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Elevate your style with our Modern Gentleman’s Wardrobe. Our collection offers a versatile range of clothing, from sharp suits to casual wear, designed to fit the lifestyle of today’s man. Whether you're dressing for the boardroom or a weekend getaway, our high-quality fabrics and impeccable tailoring ensure you look your best at every occasion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible2" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        Next-Gen Smartphones
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible2" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Stay connected with the future of communication through our Next-Gen Smartphones. Equipped with cutting-edge technology, these phones offer seamless performance, stunning displays, and exceptional camera quality. Whether you’re capturing memories, staying organized, or gaming on the go, our smartphones are designed to meet your every need with style and efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible3" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        Chic & Stylish Women’s Apparel
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible3" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Step into the world of fashion with our Chic & Stylish Women’s Apparel. Our collection is curated to offer the latest trends and timeless classics, perfect for any occasion. From elegant dresses to casual wear, each piece is designed to enhance your natural beauty and boost your confidence. Embrace your style with our carefully crafted outfits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible4" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        Powerhouse Laptops for Every Need
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible4" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Unleash your productivity with our range of Powerhouse Laptops. Whether you’re a professional, student, or gamer, our laptops are built to deliver high performance and reliability. With sleek designs, advanced processors, and long battery life, these laptops are perfect for on-the-go computing or setting up your ultimate workspace.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  shadow-lg mb-3  ">
                                <div class="card-header d-grid border-bottom-0  ">
                                    <a href="#collapsible5" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                                        Elegant Sparkle Collection
                                        <i class="fas fa-chevron-down float-end"></i>
                                    </a>
                                </div>
                                <div id="collapsible5" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span className='fw-bold'>Description:</span><p>Discover timeless elegance with our Sparkle Collection. Each piece is crafted to perfection, featuring exquisite designs that capture the essence of luxury. From delicate necklaces to statement rings, our jewelry adds a touch of sophistication to any outfit. Whether you're looking for the perfect gift or a treat for yourself, our collection is designed to dazzle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container my-4" style={{ overflow: 'hidden' }}>
                            <div className="product-container">
                                <div className="card product-card active border-0">
                                    <img src={products[currentIndex].imgSrc} className="card-img-top product-img" alt={products[currentIndex].title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{products[currentIndex].title}</h5>
                                        <p className="card-text fw-bold">Price: {products[currentIndex].price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Home1;