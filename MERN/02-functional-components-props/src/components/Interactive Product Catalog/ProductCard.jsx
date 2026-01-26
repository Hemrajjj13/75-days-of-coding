import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({ products }) => {
  console.log(products)
  return (
    <div className={styles.parent}>
        
            {products.map(product => (
              <div className={styles.card} key={product.id}>
                <img src={product.image} alt={`image${product.id}`}/>
                <h3>{product.name}</h3>
                <p>{`$${product.price}`}</p>
              </div>
              
            ))}

        
    </div>
  )
}

export default ProductCard