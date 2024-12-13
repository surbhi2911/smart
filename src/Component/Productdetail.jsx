// // import React from 'react';
// // import { ProductItemlist } from './ProductItemlist';
// // import Header from './Header';
// // import Footer from './Footer';
// // import { useParams } from 'react-router-dom';
// // import { FaGit, FaGithub, FaLink, FaRupeeSign } from 'react-icons/fa';
// // import { BsWhatsapp } from 'react-icons/bs';

// // function Productdetail() {

// //     const id = useParams().id;
// //     console.log(id);

// //     const produc = ProductItemlist.filter((x) => x.id == id);
// //     console.log(produc);

// //     return (
// //         <div>
// //             <Header />
// //             <div className="container px-0">
// //                 <div className="row">
// //                     {produc.map((product, idx) => (
// //                         <div className="row g-4" key={idx}>
// //                             {product.products.map((item, index) => (
// //                                 <div className="col-12 col-sm-6 col-lg-3" key={index}>
// //                                     <div className="card h-100 rounded-0 cardproduct">
// //                                         <img src={item.image3} className="card-img-top img-fluid p-3" alt={item.name} />
// //                                         <div className="card-body">
// //                                             <h5 className="card-title fs-5 text-success fw-bold text-uppercase">{item.name}</h5>
// //                                             <h6 className="card-subtitle my-2 text-muted pera text-secondary">{item.title}</h6>
// //                                             <p className="card-text mb-2 pera">{item.describ}</p>
// //                                             <div className='d-flex align-items-center'>
// //                                                 <div className='fw-bold text-muted text-decoration-line-through'>
// //                                                     <FaRupeeSign /> {item.dprice}
// //                                                 </div>
// //                                                 <div className='fw-bold ps-2'>
// //                                                     <FaRupeeSign />{item.mprice}
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                         <button className='btn m-0 btn-success rounded-0 w-100 mt-2 fw-medium fs-5'>
// //                                             <BsWhatsapp /> Get Now
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //             <Footer />
// //         </div>
// //     );
// // }

// // export default Productdetail;
// import React from 'react';
// import { ProductItemlist } from './ProductItemlist';
// import Header from './Header';
// import Footer from './Footer';
// import { useParams } from 'react-router-dom';
// import { FaRupeeSign } from 'react-icons/fa';
// import { BsWhatsapp } from 'react-icons/bs';

// function Productdetail() {

//     const id = useParams().id;
//     console.log(id);

//     const produc = ProductItemlist.filter((x) => x.id == id);
//     console.log(produc);

//     return (
//         <div>
//             <Header />
//             <div className="container  overflow-hidden">
//                 <div className="row m-0 p-0 py-5 ">
//                     {produc.map((product, idx) => (
//                         <div className="row p-0 m-0 " key={idx}>
//                             {product.products.map((item, index) => (
//                                 <>
//                                 <div className="col-3">jkndfkngjudnghhnru</div>
//                             <div className='col-9'>
//                                 <div className="row">
//                                     <div className="col-12 col-md-6 col-lg-4 pt-4" key={index}>
//                                     <div className="card h-100 rounded-0 cardproduct">
//                                         <img src={item.image3} className="card-img-top img-fluid p-3 object-fit-contain" alt={item.name} />
//                                         <div className="card-body pt-0">
//                                             <h5 className="card-title fs-5 text-success fw-bold text-uppercase">{item.name}</h5>
//                                             <h6 className="card-subtitle my-2 text-muted pera text-secondary">{item.title}</h6>
//                                             <p className="card-text mb-2 pera">{item.describ}</p>
//                                             <div className='d-flex align-items-center'>
//                                                 {item.dprice && (
//                                                     <div className='fw-bold text-muted text-decoration-line-through'>
//                                                         <FaRupeeSign /> {item.dprice}
//                                                     </div>
//                                                 )}
//                                                 <div className={`fw-bold ${item.dprice ? 'ps-2' : ''}`}>
//                                                     <FaRupeeSign /> {item.mprice}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <button className='btn m-0 btn-success rounded-0 w-100 mt-2 fw-medium fs-5'>
//                                             <BsWhatsapp /> Get Now
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>
//                             </>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Productdetail;
import React from 'react';
import { ProductItemlist } from './Productitemlist';
import Header from './Header';
import Footer from './Footer';
import { Link, useParams } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Productdetail() {
    const { id } = useParams();
    console.log(id);

    const produc = ProductItemlist.filter((x) => x.id == id);
    console.log(produc);

    const handleWhatsAppClick = (productName) => {
        const message = `Hi there! I'm interested in learning more about your product: "${productName}". Could you please provide additional details, availability, and pricing? `;
        const whatsappURL = `https://wa.me/7434034244?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div>
            <Header />
            <div className="container overflow-hidden">
                <div className="row m-0 p-0 py-5 justify-content-center">
                    <div className="col-12 col-md-3 stickysidebar">
                        <div className="shadow-lg p-3">
                         <div className='d-flex  text-center align-content-center align-items-center'>
                         <div><img src={require("../Assets/Image/profile picture 1.jpg")} alt="" className='img-fluid logoset' /> </div>
                         <div className='pt-1 fw-bold ps-2'>SWAMINARAYAN MEGA MART</div>
                         </div>
                            <h5 className="pt-5">All Category</h5>
                            {ProductItemlist.map((x) => {
                                const isActive = x.id == id;
                                return (
                                    <Link
                                        className={`fw-bold p-2 d-block text-decoration-none border sidebarhover my-3 ${isActive ? 'bg-success text-white' : 'text-success'}`}
                                        to={`/${x.id}`}
                                        rel="noopener noreferrer"
                                        key={x.id}
                                    >
                                        {x.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-9 pt-5 pt-md-0">
                        <div className="row">
                            {produc.map((product, idx) => (
                                <React.Fragment key={idx}>
                                    {product.products.map((item, index) => (
                                        <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                                            <div className="card h-100 rounded-0 cardproduct">
                                                <img src={item.image3} className="card-img-top img-fluid p-3 object-fit-contain" alt={item.name} />
                                                <div className="card-body pt-0">
                                                    <h5 className="card-title fs-5 text-success fw-bold text-uppercase">{item.name}</h5>
                                                    <h6 className="card-subtitle my-2 text-muted pera text-secondary">{item.title}</h6>
                                                    <p className="card-text mb-2 pera">{item.describ}</p>
                                                    <div className='d-flex align-items-center'>
                                                        {item.dprice && (
                                                            <div className='fw-bold text-muted text-decoration-line-through'>
                                                                <FaRupeeSign /> {item.dprice}
                                                            </div>
                                                        )}
                                                        <div className={`fw-bold ${item.dprice ? 'ps-2' : ''}`}>
                                                            <FaRupeeSign /> {item.mprice}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button 
                                                    className='btn m-0 btn-success rounded-0 w-100 mt-2 fw-medium fs-5'
                                                    onClick={() => handleWhatsAppClick(item.name)}
                                                >
                                                    <BsWhatsapp /> Get Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Productdetail;
