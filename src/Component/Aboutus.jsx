import React from "react";
import Slider from "react-slick";
import "../Assets/Css/Aboutussec.css"
import TittlesAll from "./TittleAll";

function Aboutus() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    swipe: true,
    arrows: false,
    pauseOnHover: false,
  };

  let aboutimage = [
    {
      image: require("../Assets/Image/homeslider1 (1).jpg")
    },

    {
      image: require("../Assets/Image/homeslider1 (2).jpg")
    },
    {
      image: require("../Assets/Image/homeslider1 (3).jpg")
    },


  ]
  return (
    <>
   <div className="overflow-hidden" id='aboutus'>
   <div className="container my-5 bg-white py-sm-5">
        <div className="row pt-5 pb-2">
          <div className="col-12 col-md-12 col-lg-7 overflow-hidden">
            <div style={{ width: "82%" }} className="test-shine h-100" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
              <img
                src={"https://img.freepik.com/free-photo/group-businesspeople-discussing-project-laptop_23-2148073311.jpg?t=st=1729859081~exp=1729862681~hmac=f34639d97e1e785f40608dceb807c916a689cd41e8421045e07dd61d987e67aa&w=900"}
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>

            <div className="p-0 bg-white aboutslide_sec overflow-hidden">
              <div className="aboutslider  ms-auto  m-0  overflow-hidden" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                <Slider {...settings} className="p-0 m-0  overflow-hidden border border-5 border-white test-shine">
                  {aboutimage?.map((x, i) => {
                    console.log(x);
                    return (
                      <>
                        <div className="slider_imageaboutus ">
                          <img src={x.image} alt="" className="img-fluid w-100 h-100 object-fit-cover " />
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5  d-flex flex-column justify-content-between">
            <div className="h-100 ">
         <div className="tittle"><TittlesAll tittle="ABOUT US " /></div>
               
                <div className="sectittle"       data-aos="fade-down"
                data-aos-duration="1500" data-aos-once="true">Shop Smart, Live Better with Swaminarayan Mega Mart!
</div>
              <div className="pera py-3">
              Explore an extensive collection of groceries, household items, stylish apparel, and top-notch electronics. Shop smarter with budget-friendly prices on every product. Save big without compromising on quality! Enjoy fresh produce, premium groceries, and top-quality items you can trust.
              Place your orders in advance and enjoy FREE doorstep delivery within Surat. 🚚  </div>
              <div className="row g-3 p-0 m-0">
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={"https://jr-equipment.vercel.app/static/media/vector-golden-balance-law-scales-with-flat-illustration-style_954135-1168-removebg-preview.1ecdee875221527268f6.png"}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2  text-capitalize">
                      Legal Status of Firm
                    </div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">
                      Individual - Proprietor
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={"https://jr-equipment.vercel.app/static/media/charity-vector-illustration-style_717774-11817-removebg-preview.fc785973e803ebd275c4.png"}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2 text-capitalize">
                      Nature of Business
                    </div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">Manufacturer</div>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={"https://jr-equipment.vercel.app/static/media/verified-logistic-vector-icon-design-illustration_1174953-23790-removebg-preview.e37a3898269053369e38.png"}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2 text-capitalize">GST No.</div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">24ANQPV9757N1ZO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
    </>
  );
}

export default Aboutus;