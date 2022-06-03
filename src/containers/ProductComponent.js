import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const rendorList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="ul fixed menu">
        <div className="ul container center">
          <div className="four column wide" key={id}>
            <div className="ul link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">{price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  });

  return (
    <> {rendorList} </>
  )
}

export default ProductComponent