import React from 'react'
import Slider from "react-slick";
const CustomSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Slider {...settings}>
            <div className='w-100'>
                <img className="img-fluid w-100" style={{objectFit: 'cover', width: '100% !important', height: "100%", objectPosition: 'top'}} src={'slider{pinterest}.jpg'} />
                {/* <div style={{backgroundImage: 'url(slider{pinterest}.jpg)', backgroundSize: 'cover'}}></div> */}
            </div>
            <div className='w-100' >
                <img className="img-fluid w-100" style={{objectFit: 'cover', width: '100% !important', height: "100%", objectPosition: 'top'}} src={'https://images.unsplash.com/photo-1600337752115-de2c09d6704f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} />
            </div>
            <div className='w-100'>
                <img className="img-fluid w-100" style={{objectFit: 'cover', width: '100% !important', height: "100%", objectPosition: 'top'}} src={'https://images.unsplash.com/photo-1600337752115-de2c09d6704f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} />
            </div>
            <div className='w-100'>
                <img className="img-fluid w-100" style={{objectFit: 'cover', width: '100% !important', height: "100%", objectPosition: 'top'}} src={'https://images.unsplash.com/photo-1600337752115-de2c09d6704f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} />
            </div>
            </Slider>
        </div>
    )
}

export default CustomSlider
