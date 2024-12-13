import React from "react";
import Slider from "react-slick";
import "../Assets/Css/Product.css";
import { TbCircleArrowUpRight } from "react-icons/tb";
import TittlesAll from "./TittleAll";
import { Link } from "react-router-dom";
import { ProductItemlist } from "./Productitemlist";

function Product() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust the speed as needed
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden" id="product">
      <div className="product_high" style={{ marginBottom: "200px" }}>
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-12 col-lg-9 overflow-hidden">
              <div className="tittle">
                <TittlesAll tittle="Products" />
              </div>
              <div
                className="sectittle text-white"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Our Popular Products
              </div>
            </div>
            <div className="col-12 col-lg-3 pera text-white"></div>

            <div className="py-5 px-0" style={{ marginBottom: "-200px" }}>
              <Slider
                {...settings}
                className="p-0 m-0 text-white header_slickslider pt-3 pt-lg-5"
              >
                {ProductItemlist.map((product) => {
                  // const productMessage = encodeURIComponent(
                  //   `Hi! 🌟 I’m interested in your product:\n\n📦 *${product.name} products * - ${product.tittle}\n💰 ✨ Can you provide more information?`
                  // );
                  // const whatsappLink = `https://wa.me/9558064415?text=${productMessage}`;

                  return (
                    <Link
                      to={'/' + product.id}
                      rel="noopener noreferrer"
                      key={product.id}
                    >
                      <div className="container_sec product-grid">
                        <div className="product-image h-100 shadow">
                          <img
                            className="pic-1 h-100 object-fit-cover"
                            src={product.image1}  
                            alt={product.tittle}
                          />
                          <img
                            className="pic-2 h-100 object-fit-cover"
                            src={product.image2}
                            alt={product.tittle}
                          />
                          <div className="overlay_sec">
                            <div className="text h-100 px-2 d-flex flex-column justify-content-between">
                              <div className="icon_color">
                                <TbCircleArrowUpRight
                                  className="text-white rounded-circle"
                                  style={{
                                    backgroundColor: "var(--darkgreen--)",
                                  }}
                                />
                              </div>
                              <div className="p-2">
                                <div className="fw-bold">{product.name}</div>
                                <div className="fw-bold fs-3">{product.tittle}</div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
