import React, { useEffect, useState } from 'react'
import logoi from '../images/brands/fujistu.jpg';
import logoi1 from '../images/brands/lg.jpg';
import logoi2 from '../images/brands/samsung.jpg';
import logoi4 from '../images/brands/hermes.png';
import logoi5 from '../images/brands/another.jpg';
// import logoi6 from '../images/brands/nike.png';
import logo1 from '../images/Banner/banner5.jpg'
import logo2 from '../images/Banner/banner4.jpg'
import logo6 from '../images/Banner/banner2.jpg';
import logo7 from '../images/Banner/banner1.jpg';
import logo8 from '../images/Banner/banner3.jpg';
import logoa from '../images/electronic/electronic5.jpg'
import logob from '../images/electronic/electronic1.jpg'
import logoc from '../images/electronic/electronic7.jpg'
import logod from '../images/electronic/electronic8.jpg'
import logoe from '../images/electronic/electronic9.jpg'
import logof from '../images/electronic/electronic6.jpg'

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
    image: logod
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

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [exitingIndex, setExitingIndex] = useState(null);

  const products = [
    {
      id: 1,
      imgSrc: logoa,
      title: 'Elegant Sparkle Collection',
      price: '$99.99'
    },
    {
      id: 2,
      imgSrc: logob,
      title: 'Powerhouse Laptops for Every Need',
      price: '$149.99'
    },
    {
      id: 3,
      imgSrc: logoc,
      title: 'Next-Gen Smartphones',
      price: '$199.99'
    },
    {
      id: 4,
      imgSrc: logod,
      title: 'Chic & Stylish Women’s Apparel',
      price: '$109.99'
    },
    {
      id: 5,
      imgSrc: logoe,
      title: 'Modern Gentleman’s Wardrobe',
      price: '$119.99'
    },
    {
      id: 6,
      imgSrc: logof,
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
      <div className='container-fluid'>
        <div className='row my-3'>
          <div className='col-lg-6 col-md-12 my-5 mt-5'>
            <div id="demo" class="carousel slide mt-3 " data-bs-ride="carousel">
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
            <div id="accordion" class="row-cols-1 my-3">
              <div class="card shadow-lg mb-3 ">
                <div class="card-header d-grid border-bottom-0  ">
                  <a href="#collapsibleOne" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                    WD 2TB Elements Portable External Hard Drive - USB 3.0
                    <i class="fas fa-chevron-down float-end"></i>
                  </a>
                </div>
                <div id="collapsibleOne" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <span className='fw-bold'>Description:</span><p>USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Wi...
                    </p>
                  </div>
                </div>
              </div>
              <div class="card  shadow-lg mb-3  ">
                <div class="card-header d-grid border-bottom-0  ">
                  <a href="#collapsible2" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                    SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
                    <i class="fas fa-chevron-down float-end"></i>
                  </a>
                </div>
                <div id="collapsible2" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <span className='fw-bold'>Description:</span><p>Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications
                    </p>
                  </div>
                </div>
              </div>
              <div class="card  shadow-lg mb-3  ">
                <div class="card-header d-grid border-bottom-0  ">
                  <a href="#collapsible3" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                    Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
                    <i class="fas fa-chevron-down float-end"></i>
                  </a>
                </div>
                <div id="collapsible3" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <span className='fw-bold'>Description:</span><p>3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifesp...
                    </p>
                  </div>
                </div>
              </div>
              <div class="card  shadow-lg mb-3  ">
                <div class="card-header d-grid border-bottom-0  ">
                  <a href="#collapsible4" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                    WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
                    <i class="fas fa-chevron-down float-end"></i>
                  </a>
                </div>
                <div id="collapsible4" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <span className='fw-bold'>Description:</span><p>Expand your PS4 gaming experience, Play anywhere Fast and easy, setup ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="card  shadow-lg mb-3  ">
                <div class="card-header d-grid border-bottom-0  ">
                  <a href="#collapsible5" data-bs-toggle="collapse" class="btn border-0 text-start   textii">
                    Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
                    <i class="fas fa-chevron-down float-end"></i>
                  </a>
                </div>
                <div id="collapsible5" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <span className='fw-bold'>Description:</span><p>21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ overflow: 'hidden' }}>
          <div className='col-lg-7 col-md-12'>
            <h2 style={{ textAlign: "center", color: "#2c4964" }} className='mt-3'>Brands</h2>
            <div class="my-3 mx-auto hrr "></div>
            <div className='row my-3 d-flex' >
              {homeData.map((item) => (
                <div className='my-3 containo col-md-4 col-sm-4 containo' key={item.id} style={{  height: '140px' }}>
                  <img src={item.image} alt={item.name} style={{ height: 'inherit',margin:"0px 50px 0px 50px", objectFit:'inherit' }} />
                </div>
              ))}
            </div>
          </div>
          <div className='col-lg-5 col-md-12'>
            <div className="container my-3">
              <div className="product-container">
                <div className="card product-card active border-0 ">
                  <img src={products[currentIndex].imgSrc} className="card-img-top product-img rounded-circle" alt={products[currentIndex].title} />
                  {/* <div className="card-body"> */}
                  {/* <h5 className="card-title">{products[currentIndex].title}</h5> */}
                  {/* <p className="card-text fw-bold">Price: {products[currentIndex].price}</p> */}
                  {/* <a href="#" className="btn btn-primary">Buy Now</a> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel1;