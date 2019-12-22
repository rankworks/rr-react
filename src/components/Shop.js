import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/shop.css';


const Shop = props => {

  const setScrollRef = useCallback(node => {
        if (node !== null) {
              node.parentNode.parentNode.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
              });
        }
  }, [])

useEffect(
  ()=>props.changeRoute('shop')
)

return <div className="Shop" ref={setScrollRef}>

        <div className="info-page">
              <h1 className="title">SHOP NOW</h1>
              <div className="info-blurb">


              <h2>To get a custom recommendation, just answer a few questions: </h2>
              <p>
              <br />
              <Link to="quote"><div class="start-button">Get Started Now:</div></Link>
              <br />
              <br />
              See the Results and Choose Your New Air Conditioner! Matched with the best recommendation for efficiency, most competitive costs, installation & 10 Year Warranty Included!</p><p>
We’ll show you a great selection of air conditioners in the size and tonnage you choose but first match you with the best option available for the parameters input. We will also show you all your options on SEER ratings from the minimum of 14 to 18 & 20. If you want more options or specific brands please call 770-693-2946 for a customized quote. RockRuth HVAC LLC services & installs all makes and models. If you see the option you want, simply pick the unit you want and check out.</p><p>IT'S TRULY THAT EASY WITHOUT A PUSHY SALESPERSON.</p>

<p>
If using financing there is no down payment NOR Payment due until the time of completion!</p>
<Link to="quote"><div class="start-button">Get Started Now:</div></Link>
 <br /><br />
 <img src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/ac-systems-parts.jpg/:/"
              alt="Display of numerous AC units and accessories." className="main-graphic" />
</div>
</div>
</div>



  
};

export default Shop;