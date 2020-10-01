import React, { Component } from 'react'
const footer = () => {
    return (
         <div className="container-fluid bg-dark footer">
                <div className="container">
                   <div className="row">
                       <div className="col">
                           <h5>React Ecommerce</h5>
                          
                       </div>
                       <div className="col">
                           <h5>Our Store</h5>
                            <p>New York</p>
                            <p>London</p>
                            <p>New Jersey</p>
                       </div>
                       <div className="col">
                           <h5>Contact Us</h5>
                            <p>abc@react.com</p>
                            <p>+9236423156</p>
                           
                       </div>
                       <div className="col">
                           <h5>Products</h5>
                            <p>Shoes</p>
                            <p>Clothing</p>
                            <p>Accessories</p>
                           
                       </div>
                   </div>
                   </div>
       </div>
    );
}

export default footer;