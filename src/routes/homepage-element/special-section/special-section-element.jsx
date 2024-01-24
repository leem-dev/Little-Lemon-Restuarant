import Greek from "../../../assets/greek salad.jpg";
import Bruch from "../../../assets/bruchetta.svg";
import Dessert from "../../../assets/lemon dessert.jpg";
import Delivery from "../../../assets/delivery.svg";

import "./special-section-element-styles.css";

const Specials = () => {
  const boxImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const delivery = {
    width: "40px",
    height: "20px",
  };
  return (
    <div className='specialSection'>
      <div className='specials-top'>
        <h2>This weeks specials!</h2>
        <button type='button' className='menu-btn btn'>
          Online menu
        </button>
      </div>
      {/* try to load this box with javascript later */}
      <div className='specials-bottom'>
        <div className='specials-box'>
          <div className='specials-image'>
            <img src={Greek} alt='greek salad' style={boxImg} />
          </div>
          <div className='specials-inner-box'>
            <div className='name-and-price'>
              <h5>Greek Salad</h5>
              <p>$12.99</p>
            </div>
            <div className='specials-info'>
              <p className='specials-info-text'>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta
                cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
            </div>
            <div className='specials-delivery'>
              <a href='_blank'>Order a delivery</a>
              <img src={Delivery} alt='delivery' style={delivery} />
            </div>
          </div>
        </div>
        <div className='specials-box'>
          <div className='specials-image'>
            <img src={Bruch} alt='bruchetta' style={boxImg} />
          </div>
          <div className='specials-inner-box'>
            <div className='name-and-price'>
              <h5>Bruchetta</h5>
              <p>$5.99</p>
            </div>
            <div className='specials-info'>
              <p className='specials-info-text'>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and
                seasoned with salt and olive oil.
              </p>
            </div>
            <div className='specials-delivery'>
              <a href='_blank'>Order a delivery</a>
              <img src={Delivery} alt='delivery' style={delivery} />
            </div>
          </div>
        </div>
        <div className='specials-box'>
          <div className='specials-image'>
            <img src={Dessert} alt='lemon dessert' style={boxImg} />
          </div>
          <div className='specials-inner-box'>
            <div className='name-and-price'>
              <h5>Lemon Dessert</h5>
              <p>$5.00</p>
            </div>
            <div className='specials-info'>
              <p className='specials-info-text'>
                This comes straight fromm grandma's recipe book, every last ingredient has been
                sourced and is as authentic as can be imagined.
              </p>
            </div>
            <div className='specials-delivery'>
              <a href='_blank'>Order a delivery</a>
              <img src={Delivery} alt='delivery' style={delivery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
