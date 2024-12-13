import React from 'react'
import HOC from './HOC'
import Carouselsec from './Carouselsec'
import Whychooseus from './Whychooseus'
import Aboutus from './Aboutus'
import Product from './Product'
import Testimonial from './Testimonial'
import Progressbar from './Progressbar'
import Counter from './ContactUs'



function Homepage() {
  return (
    <>

      <Carouselsec />
      <Product />
      <Aboutus />
      <Whychooseus />
      <Progressbar />
      <Testimonial />
      <Counter />
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29756.147294898798!2d72.85676162980015!3d21.21128185957491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0043153267%3A0x89d8c0545407b1ad!2sSwaminarayan%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1729853641291!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='my-3 pb-3'>
        <div class="marquee" style={{ backdropFilter: 'blur(10px)' }}>
          <div class="marquee-content">
            <div className='font_stroke me-1'>
              Swaminarayan Mega Mart
            </div>
          </div>
          <div class="marquee-content">
            <div className='font_stroke ms-4'>
              Swaminarayan Mega Mart
            </div>
          </div>
          <div class="marquee-content">
            <div className='font_stroke ms-4'>
              Swaminarayan Mega Mart
            </div>
          </div>
          <div class="marquee-content">
            <div className='font_stroke ms-4'>
              Swaminarayan Mega Mart
            </div>
          </div>
          <div class="marquee-content">
            <div className='font_stroke ms-4'>
              Swaminarayan Mega Mart
            </div>
          </div>
          <div class="marquee-content">
            <div className='font_stroke ms-4'>
              Swaminarayan Mega Mart
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HOC(Homepage)