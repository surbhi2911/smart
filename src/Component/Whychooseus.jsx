import React from 'react'
import { FaSearchDollar } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri';
import "../Assets/Css/Whychooseus.css"
import TittlesAll from './TittleAll';

function Whychooseus() {

    const contentItems = [
        {
            icon: <MdOutlineDesignServices className='fs-1' />,
            title: "Wide Range of Products",
            description: "Explore an extensive collection of groceries, household items, stylish apparel, and top-notch electronics."
        },
        {
            icon: <RiTeamLine className='fs-1' />,
            title: "Unbeatable Wholesale Prices",
            description: "Shop smarter with budget-friendly prices on every product. Save big without compromising on quality!"
        },
        {
            icon: <FaSearchDollar className='fs-1' />,
            title: "Free Delivery in Surat",
            description: "Place your orders in advance and enjoy FREE doorstep delivery within Surat."
        }
    ];

    return (
        <>
            <div className='overflow-hidden' id='whyus'>
                <div className="container py-2">
                    <div className="text-center">
                        <div className='whytittle '>
                            <TittlesAll tittle="WHY CHOOSE US" />
                        </div>
                    </div>
                    <h2 className='text-center  sectittle' data-aos="fade-down"
                        data-aos-duration="1500" data-aos-once="true">Start your shopping journey today and experience the difference!

                    </h2>
                    <div className="row">
                        <div className='col-12 col-md-6 col-lg-6 pt-5'>
                            <div className="h-100">
                                {contentItems.map((item, index) => (
                                    <div className='d-flex py-3' key={index} data-aos="fade-up"
                                        data-aos-duration="1500" data-aos-once="true">
                                        <div className='me-3 text-success'>{item.icon}</div>
                                        <div>
                                            <h4 className='fw-bold'>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3 d-none d-lg-block pt-5'>
                            <div className="h-100" data-aos="fade-right"
                                data-aos-duration="1500" data-aos-once="true">
                                <div className='test-shine h-100'>

                                    <img src={require("../Assets/Image/image_2024_10_25T12_19_23_791Z.png")} className='image-1 img-fluid w-100 h-100 object-fit-cover' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 pt-5'>
                            <div className='px-2 h-100 text-center' data-aos="fade-left"
                                data-aos-duration="1500" data-aos-once="true">
                                <div className="mb-5 test-shine ">


                                    <img src={require("../Assets/Image/3d-rendering-cartoon-shopping-cart_23-2151680608.jpg")} className='image-2 img-fluid w-100 h-100 object-fit-cover ' alt="" />
                                </div>
                                <div className=''>
                                    <img src="https://img.freepik.com/premium-photo/aisle-with-shelves-full-food-products-is-seen-supermarket-store_1022426-16731.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid" className='image-3 img-fluid w-100 h-100 object-fit-cover  animated-image' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychooseus