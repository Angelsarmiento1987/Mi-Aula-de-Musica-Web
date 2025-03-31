
import React from 'react';
import '../MyFooter/MyFooter.css'
import LogoFooter from '../../Img/logoPortada.png'

const MyFooter = () => {
    return(
        <div className='contGralFooter'>

                <div className='contLogo'>
                    <img src={LogoFooter} alt="" className='logoFooter' />
                </div>  
        </div>
    )
}

export { MyFooter }