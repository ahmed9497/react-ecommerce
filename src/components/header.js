import React ,{useEffect} from 'react'
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from 'react-redux';

const Header=(props)=>{

    console.log(props);

    useEffect(() => {

        const marker =document.querySelector('#marker');
        const item =document.querySelectorAll('nav a');
        console.log(item)
        item.forEach(ele => {
            ele.addEventListener('click',(e)=>{
               
                indicator(e.target);
            })
        });
        const indicator=(e)=>{
            marker.style.left = e.offsetLeft+'px';
            marker.style.width = e.offsetWidth+'px';
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll' , handleScroll);
        }
      }, []);


      const handleScroll=(event)=> {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        
        document.getElementById("myBar").style.width = scrolled + "%";
       
    }
    return (
        <>
        <nav className=" fixed-top navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">React Ecommerce</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
                <ul className="navbar-nav m-auto">
                <div id="marker"></div>
                    <li className="nav-item ">
                        <NavLink className="nav-link" exact={true} to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    </li>

                </ul>
                <div >
                <div className="position-relative " style={{width:'38px'}}>
                 <span className="badge badge-primary position-absolute " style={{top:0,right:'-1px'}}>{props.root.cart.length}</span>   
                <AiOutlineShoppingCart size={30}/>
                </div>
                </div>

                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
            </div>
        </nav>
        <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
        </div>
  </>
    );
}
const mapStateToProps = (state) => {
    return state;
  }
export default connect(mapStateToProps)(Header)
// export default header;