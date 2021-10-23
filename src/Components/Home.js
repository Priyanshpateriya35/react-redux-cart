import React from "react";

function Home(props) {
 // console.log("Home:", props.cardData);
 
  return (
    <>
    <div className='container m-5 p-5'>
    <h1 className="Heading-cart">Shopping Cart</h1>
      <div className="card-wrapper">
        <div className="img-wrapper img">
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000" alt="not found"/>
        </div>
        <div className="text-decorate">
          <span>I-Phone</span>
          <span>Price: $215.23</span>
        </div>
        <div className="btn-wrapper button">
          <button
            className="first-bt"
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "I-Phone11" });
            }} >Add To Cart </button>
          

          <button onClick={()=>{
            props.removeToCartHandler()

          }} className="second-bt">Remove To Cart</button>
        </div>
      </div>
      
      </div>
      </>
    
  );
}

export default Home;
