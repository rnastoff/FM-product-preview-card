
import classes from './ProductPreview.module.css';
import product from '../images/image-product-desktop.jpg';
import iconCart from '../images/icon-cart.svg';

import Card from './Card';

const ProductPreview = () => {
  return (
    <Card>
      <div className={classes.left}>
        <img src={product} alt="perfume" />
      </div>
      <div className={classes.right}>
        <h2>Perfume</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar, and voluptuous interpretation
          composed by Olivier Poige, Perfume-Creator for
          the house of CHANEL.</p>

        <div className={classes.prices}>
          <div className={classes.prices__sale}>$149.99</div>
          <div className={classes.prices__retail}>$169.99</div>
        </div>

        <button>
          <img src={iconCart} alt="card" />
          <div className={classes.buttonText}>Add to Cart</div>
        </button>
      </div>
    </Card>
  )
}

export default ProductPreview;