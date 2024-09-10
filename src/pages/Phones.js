import React from 'react';
import image1 from '../images/phone/phone1.jpg'
import image2 from '../images/phone/phone2.jpg'
import image3 from '../images/phone/phone3.jpg'
import image4 from '../images/phone/phone4.jpg'
import image5 from '../images/phone/phone5.jpg'
import image6 from '../images/phone/phone6.jpg'
import image7 from '../images/phone/phone7.jpg'
import image8 from '../images/phone/phone8.jpg'
import image9 from '../images/phone/phone9.jpg'
import image10 from '../images/phone/phone10.jpg'
import image11 from '../images/phone/phone11.jpg'
import image12 from '../images/phone/phone12.jpg'
import { FaStar } from 'react-icons/fa';

const phoneData = [
  {
    id: 1,
    name: "Smartphone",
    price: 299.99,
    image: image1,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 2,
    name: "Laptop",
    price: 799.99,
    image: image2,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 3,
    name: "Headphones",
    price: 99.99,
    image: image3,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 4,
    name: "Headphones",
    price: 99.99,
    image: image4,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 5,
    name: "Headphones",
    price: 99.99,
    image: image5,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 6,
    name: "Headphones",
    price: 99.99,
    image: image6,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 7,
    name: "Headphones",
    price: 99.99,
    image: image7,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 8,
    name: "Headphones",
    price: 99.99,
    image: image8,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 9,
    name: "Headphones",
    price: 99.99,
    image: image9,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 10,
    name: "Headphones",
    price: 99.99,
    image: image10,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 11,
    name: "Headphones",
    price: 99.99,
    image: image11,
     rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 12,
    name: "Headphones",
    price: 99.99,
    image: image12,
    rating: {
      rate: 3.3,
      count: 203
    }
  },
];

function Phones({ addToCart }) {
  return (
    <div className='container-fluid my-5'>
      <h2 style={{textAlign:'center'}}>Phones</h2>
      <div className='shadow-lg row' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {phoneData.map((item) => (
          <div className='text-center col-lg-2 col-md-3 col-sm-6 rounded-2 border-0 shadow-lg' key={item.id} style={{ border: '1px solid #ccc', height:'310px'}}>
            <img className='card img-fluid mx-auto border-0 mt-2' src={item.image} alt={item.name} style={{ width: '60%', height: '50%' }} />
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
export default Phones;