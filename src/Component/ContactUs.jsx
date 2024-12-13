import React, { useState } from 'react'
import video from "../Assets/video/video.mp4"
import '../Assets/Css/Contactus.css'
function Counter() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div id='contactus'>
            {/* Video Section */}
            <div className="mainvideo my-5 overflow-hidden"
                style={{
                    boxShadow: "inset 0 0 1200px 1200px rgba(0, 0, 0, 0.5)",
                    height: "450px",
                    width: "100%"
                }}>
                <div className="video-background"
                    style={{
                        height: "450px",
                        position: "absolute",
                        width: "100%",
                        zIndex: -1
                    }}>
                    <video
                        src={video}
                        className="img-fluid w-100 h-100 object-fit-cover"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
                <div className="container overflow-hidden" data-aos="zoom-out" data-aos-duration="1800" data-aos-once="true">
                    <div className="d-flex align-items-center justify-content-center w-100" style={{ height: 450 }}>
                        <div className="video-overlay-content text-center text-white p-4 p-md-5">
                            <h1 className='py-3 jr_tittle text-capitalize fs-1'>Contact Us for Any Assistance</h1>
                            <p className='py-3 pera kjh'>
                            📅 Open Daily:🕒 માર્ટ નો સમય: 09:00 AM થી 9:30 PM
                            </p>
                            {/* Button to open modal */}
                            <button className='button-86 mx-auto fw-bold fs-6' role="button" onClick={handleOpenModal}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">

                            <div className="modal-body" >
                                <div className="container p-4" style={{ backgroundColor: "#e9f7ef", borderRadius: "0px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                                    <button type="button" className="btn-close text-center" onClick={handleCloseModal}></button>
                                    <h3 className="mb-4 text-center" style={{ color: "#28a745" }}>Contact Us </h3>

                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-bold" style={{ color: "#155724" }}>Name</label>
                                        <input type="text" className="form-control shadow-sm" id="name" required style={{ borderRadius: "0px", transition: "all 0.3s ease", borderColor: "#28a745" }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-bold" style={{ color: "#155724" }}>Email</label>
                                        <input type="email" className="form-control shadow-sm" id="email" required style={{ borderRadius: "0px", transition: "all 0.3s ease", borderColor: "#28a745" }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label fw-bold" style={{ color: "#155724" }}>Phone No</label>
                                        <input type="tel" className="form-control shadow-sm" id="phone" required style={{ borderRadius: "0px", transition: "all 0.3s ease", borderColor: "#28a745" }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label fw-bold" style={{ color: "#155724" }}>Message</label>
                                        <textarea className="form-control shadow-sm" id="message" rows="3" required style={{ borderRadius: "0px", transition: "all 0.3s ease", borderColor: "#28a745" }}></textarea>
                                    </div>

                                    <button type="submit" className="btn w-100 mt-3" style={{ borderRadius: "0px", fontWeight: "bold", backgroundColor: "#28a745", borderColor: "#28a745", color: "#fff" }}>
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop */}
            {showModal && (
                <div
                    className="modal-backdrop fade show"
                    onClick={handleCloseModal}
                ></div>
            )}
        </div>
    );
}

export default Counter;