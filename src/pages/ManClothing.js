import React from 'react'
import useFetch from '../components/useFetch';
import { truncateSentence } from '../helpers/helper';
import { FaStar } from 'react-icons/fa';
import Carousel2 from '../components/Carousel2';

function ManClothing({ addToCart }) {
  const [data, error] = useFetch("https://fakestoreapi.com/products/category/men's clothing");
  console.log(error);


  return (
    <div>
      <Carousel2 />
      <div className='container-fluid my-5'>
        <div className="row g-1">
          <div className=' shadow-lg border-1' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((item) => (
              <div className='text-center col-lg-3 col-md-4 col-sm-6 rounded-2 border-2' key={item.id} style={{ border: '1px solid #ccc', height: '550px' }}>
                <div><img className='card img-fluid mx-auto border-0 mt-2 ' src={item.image} alt={item.name} style={{ width: '90%', height: '250px' }} /></div>
                <div style={{ width: 'auto', height: '220px' }}>
                  <div style={{ height: '50px' }}><h6 className='card-title mx-3 my-2'>{item.title}</h6></div>
                  <div style={{ height: '90px' }} ><p className="card-text fst-italic mx-3">{truncateSentence(item.description)}</p></div>
                  <div style={{ height: '80px' }} className='d-flex justify-content-between align-items-center fw-bold'>
                    <div className='ms-3'>Price: ${item.price}</div>
                    <div className="card-text text-italic me-4">
                      Rate: {item.rating.rate}
                      <FaStar color="yellow" />
                    </div>
                  </div>
                </div>
                <div><button className='btn btn-success' onClick={() => addToCart(item)}>Add to Cart</button></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManClothing;