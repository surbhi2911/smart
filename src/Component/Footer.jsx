import React from 'react'
import "../Assets/Css/Footersec.css"
import { FaFacebookF, FaInstagram, FaMapLocationDot } from 'react-icons/fa6'
import { FaMailBulk } from 'react-icons/fa'
import { MdWifiCalling3 } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CgMail } from 'react-icons/cg'

function Footer() {
  return (
    <>
      <div className="overflow-hidden">
        <div className='footerbg w-100'>

          <div className="container">
            <div className="row align-items-center justify-content-center g-5 text-white p-sm-5 p-0">
              <div className="col-10 col-md-7 pe-0 col-lg-4 gray pera pt-5 pt-sm-0">
                <div className='d-lg-none d-block col-4 my-2'>
                  <img src={require("../Assets/Image/profile picture 1.jpg")} alt="" className='img-fluid' />
                </div>
                <div className='py-1 text-white'>
                Swminarayan mega mart

                </div>


                <div className='py-1 d-flex hovergray'>
                  <div className='fs-4'><FaMapLocationDot />
                  </div>
                  <div className='ps-2 pt-2'>Radha Krishna Campus, Yogi Chowk ,Near Pushkar Heights ,Surat, Surat, Gujarat, 395006</div>
                </div>

                <a href="mailto:swaminarayanmegamarts@gmail.com" target='_blank' className='text-decoration-none hovergray'>
                  <div className='py-1 d-flex hovergray'>
                    <div className='fs-4'><FaMailBulk />
                    </div>
                    <div className='ps-2 mt-2 '>
                      <div>swaminarayanmegamarts@gmail.com</div>
                    </div>
                  </div>
                </a>

                <a href="tel:74340 34244" className='text-decoration-none hovergray'>
                  <div className='py-1 d-flex hovergray'>
                    <div className='fs-4'><MdWifiCalling3 />
                    </div>
                    <div className='ps-2 mt-2'>
                      <div>+91 74340 34244</div>
                    </div>
                  </div>
                </a>
              </div>
              {/* <div className="col-12 col-md-6 col-lg-3 ps-lg-5 ps-3">
                <div className='footertittle'>
                  Quick Links
                </div>
                <div className='pt-2 '>
                  <div className='py-1 pera'>
                    <a href='' className='text-decoration-none hovergray '>Home</a>
                  </div>
                  <div className='py-1'>
                    <a href='' className='text-decoration-none hovergray '>About</a>
                  </div>
                  <div className='py-1'>
                    <a href='' className='text-decoration-none hovergray '>products</a>
                  </div>
                  <div className='py-1'>
                    <a href='' className='text-decoration-none hovergray '>Services</a>
                  </div>
                  <div className='py-1'>
                    <a href='' className='text-decoration-none hovergray '>Contact Us</a>
                  </div>
                </div>
              </div> */}

              <div className="col-10 col-md-5 col-lg-4 ">
                <div className='footertittle'>
                  Gallery
                </div>
                <div className='row align-items-center justify-content-center g-3 mt-2'>
                  <div className="col-6 col-lg-4"> <img src={require("../Assets/Image/IMG-20241025-WA0004.jpg")} alt="" className='img-fluid' /></div>
                  <div className="col-6 col-lg-4"> <img src={require("../Assets/Image/IMG-20241025-WA0006.jpg")} alt="" className='img-fluid' /></div>
                  <div className="col-6 col-lg-4"> <img src={require("../Assets/Image/3d-illustration-female-character-grocery-store_23-2150953964.jpg")} alt="" className='img-fluid' /></div>
                  <div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
                  <div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
                  <div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
                </div>
              </div>
              <div className="col-10 col-md-6 col-lg-4  pb-5 pb-sm-0">
                <div className='footertittle'>Subscribe</div>

                <div className='mt-2 py-1 pera'>Swminarayan mega mart
                </div>
                <div className='d-flex py-3'>
                  <input type="text" placeholder='Enter Your Email' />
                  <div className='bg-success mx-auto text-white p-2 pera'>Subscribe </div>
                </div>
                <div>
                  <div className="d-flex flex-wrap fs-4 mt-4">
                    <Link
                      to={
                        "https://www.facebook.com/profile.php?id=61556442616211&mibextid=ZbWKwL"
                      }
                      target="_blank"
                      className="footericon text-center p-2 mx-1  ms-0 d-flex text-decoration-none text-white facebookicon"
                    >
                      <FaFacebookF />
                    </Link>

                    <Link
                      to={'https://www.instagram.com/swaminarayanmegamart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}
                      className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white instaicon">
                      <FaInstagram />
                    </Link>
                    <Link
                      to={'mailto:swaminarayanmegamarts@gmail.com'}
                      className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white twittericon">
                      <CgMail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
    </>
  )
}

export default Footer