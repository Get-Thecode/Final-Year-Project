import React from 'react'

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card'>
            <div className='product-image'>
                <img src="images/watch.jpg" alt="product iamge" />
            </div>
            <div className='product-details'>
                <h6 className="brand">AmazFit</h6>
                <h5 className='product-title'>Yeh hai chez</h5>
                <p className='price'>free mei lejao</p>
            </div>
        </div>
      
    </div>
  )
}

export default ProductCard
