import React from 'react'
import Image from 'next/image'
import benifitIcon from '../assets/benfitOne.png'
import './style.css'

const index = () => {
  return (
    <>
    <div className='benifit-summary-main'>
        <div className='benifits'>
            <div className='heading'>Benefits of Eyezen lenses</div>
            <div className='benifits-box'>
                <div className='benifits-box-child'>
                    <Image src={benifitIcon} alt='Icon' />
                    <div className='name'>Visual fatigue reduction</div>
                    <div className='description'>Reduce and prevent eye fatigue symptoms</div>
                </div>
                <div className='benifits-box-child'>
                    <Image src={benifitIcon} alt='Icon' />
                    <div className='name'>Improved contrast</div>
                    {/* <div className='description'>Reduce and prevent eye fatigue symptoms</div> */}
                </div>
                <div className='benifits-box-child'>
                    <Image src={benifitIcon} alt='Icon' />
                    <div className='name'>Advanced Filter</div>
                    <div className='description'>Blue-violet light filtering</div>
                </div>

            </div>
        </div>
        <div className='chooseUs'>
            <div className='heading'>Why choose Eyezen?</div>
            <div className='satisfaction-cont'>
                <div className='left'>
                    <div className='pink-heading'>88%</div>
                    <div className='desc'>of wearers satisfied</div>

                </div>
                <div className='right'>
                <div className='pink-heading'>3%</div>
                <div className='desc'>out of 4 wearers experienced visual fatigue reduction</div>
                
                </div>
            </div>



        </div>

    </div>
    
    
    
    
    
    
    </>
  )
}

export default index