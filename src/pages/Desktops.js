import React from 'react';
import image1 from '../images/departments/departments-1.jpg';
import image2 from '../images/departments/departments-2.jpg';
import image3 from '../images/departments/departments-3.jpg';
import image4 from '../images/departments/departments-4.jpg';
import image5 from '../images/departments/departments-5.jpg';
import image6 from '../images/gallery/gallery-1.jpg';
import image7 from '../images/gallery/gallery-2.jpg';
import image8 from '../images/gallery/gallery-3.jpg';
import image9 from '../images/gallery/gallery-4.jpg';
import image10 from '../images/gallery/gallery-5.jpg';
import image11 from '../images/gallery/gallery-6.jpg';
import image12 from '../images/gallery/gallery-7.jpg';
import { FaStar } from 'react-icons/fa';

const electronicsData = [
  {
    id: 10,
    name: "Smartphone",
    price: 299.99,
    image: image1,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 20,
    name: "Laptop",
    price: 799.99,
    image: image2,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 30,
    name: "Headphones",
    price: 99.99,
    image: image3,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 40,
    name: "Headphones",
    price: 99.99,
    image: image4,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 50,
    name: "Headphones",
    price: 99.99,
    image: image5,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 60,
    name: "Headphones",
    price: 99.99,
    image: image6,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 70,
    name: "Headphones",
    price: 99.99,
    image: image7,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 80,
    name: "Headphones",
    price: 99.99,
    image: image8,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 90,
    name: "Headphones",
    price: 99.99,
    image: image9,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 100,
    name: "Headphones",
    price: 99.99,
    image: image10,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 10,
    name: "Headphones",
    price: 99.99,
    image: image11,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
  {
    id: 102,
    name: "Headphones",
    price: 99.99,
    image: image12,
     rating: {
      rate: 4.3,
      count: 203
    }
  },
];

function Desktops({ addToCart }) {
  return (
    <div className='container-fluid my-5'>
      <h2 className='text-center'>Desktops</h2>
      <div className='row shadow-lg border-1' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {electronicsData.map((item) => (
          <div className='text-center col-lg-2 col-md-3 col-sm-6 rounded-2 border-0 shadow-lg' key={item.id} style={{ border: '1px solid #ccc', height:'310px'}}>
            <img className='card img-fluid mx-auto border-0 mt-2 ' src={item.image} alt={item.name} style={{ width: '60%', height: '50%' }} />
            <h4>{item.name}</h4>
            <div className='d-flex justify-content-between ms-3 me-3'>
            <p><span className='fw-bold'>Price:</span><br/> ${item.price}</p>
            <p><span className='fw-bold'>Rating:</span><br/> {item.rating.rate} <FaStar color="yellow" /></p>
            </div>
            <button className='btn btn-success' onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Desktops;