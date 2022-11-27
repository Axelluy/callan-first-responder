import React, { Component } from 'react';
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";
import img6 from "../assests/img6.jpg";
import img7 from "../assests/img7.jpg";
import img8 from "../assests/img8.jpg";
import img9 from "../assests/img9.jpg";
import img10 from "../assests/img10.jpg";
import img11 from "../assests/img11.jpg";
import img12 from "../assests/img12.jpg";





class DemoCarousel extends Component {
    render() {
        return (
            <div className='gallery'>
                <img className='gallery-img'src={img6} />
                <img className='gallery-img'src={img7} />
                <img className='gallery-img'src={img10} />
                <img className='gallery-img'src={img9} />
                <img className='gallery-img'src={img2} />
                <img className='gallery-img'src={img12} />
                <img className='gallery-img'src={img1} />
                <img className='gallery-img'src={img8} />
                <img className='gallery-img'src={img11} />
                <img className='gallery-img'src={img5} />
                <img className='gallery-img'src={img3} />
                <img className='gallery-img'src={img4} />
                
            </div>
                
              
        );
    }
}

export default DemoCarousel;