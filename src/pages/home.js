import React ,{useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Collection from '../assets/images/collection.jpg';
import Feature from '../components/feature';
import FeatureProducts from '../components/featureProducts';
import Banner from '../components/banner';
import Footer from '../components/footer';
import { connect } from 'react-redux';




const Home = (props) => {
    console.log(props);


  

    return (
        <>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                items={1}
                autoplayTimeout
                autoplaySpeed={2}
                autoPlay={true}
            >




                {/* <div style={{height:'300px'}}> <img className="img" style={{height:'auto'}} src={Collection} />
                </div> */}
                <div style={{height:'500px',width:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundImage:`url(${require('../assets/images/hannah-morgan-ycVFts5Ma4s-unsplash.jpg')})`}}></div>
                <div style={{height:'500px',width:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundImage:`url(${require('../assets/images/joshua-coleman-_yVRLC75Ma8-unsplash.jpg')})`}}></div>
                <div style={{height:'500px',width:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundImage:`url(${require('../assets/images/pic2.jpg')})`}}></div>
               
                {/* <div style={{height:'300px'}}>
                <img className="img" style={{height:'auto'}} src={require('../assets/images/hongkong1081704.jpg')} />

                </div> */}


            </OwlCarousel>

            <Feature/>    

            {/* <BestSeller/>    */}
            <FeatureProducts/> 

            <Banner/>
            <Footer/>
        </>
    )
}
const mapStateToProps = (state) => {
    return state;
  }
export default connect(mapStateToProps)(Home)
// export default Home;