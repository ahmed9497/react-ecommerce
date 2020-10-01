import React, { Component } from 'react';
import { connect } from 'react-redux';


const products = [
    {   
        _id:1,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/6.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 200
    },
    {
        _id:2,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/5.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 300
    },
    {
        _id:3,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/2.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 200
    },
    {
        _id:4,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/3.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 300
    },
    {
        _id:5,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/4.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 300
    },
    {
        _id:6,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/8.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 300
    },
    {
        _id:7,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/7.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 300
    },
    {
        _id:8,
        img: 'http://skytheme.epizy.com/skytheme/images/shoe/9.jpg',
        title: 'Air Jordan 7 Retro',
        subtitle: 'Men shoes, Nike, Jordan',
        price: 305
    },
];
const featureProducts = (props) => {
    console.log(props)
    return (
        <>
            <div className="container">
                <div className="row">

                    {products.map((val,index) => {
                        return (
                            <div  key={index} className="col-sm-6 col-md-3 my-3">
                                <div className="product">
                                    <img src={val.img} className="img-fluid" />
                                    <div className="mt-2 p-2">
                                        <p className="font-weight-bold mt-2 float-right">{val.price}$</p>
                                        <h6 className="font-weight-bold">{val.title}</h6>
                                        <small>{val.subtitle}</small>
                                    </div>

                                   
                                        <button className="cart-btn" onClick={()=>props.dispatch({ type: 'addToCart', payload:val })}>Add to cart</button>
                                  
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return state;
  }
export default connect(mapStateToProps)(featureProducts)
// export default featureProducts;