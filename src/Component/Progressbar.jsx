import React, { useEffect, useRef } from "react";
import video from "../Assets/video/progress.mp4"; // Correct import

function Progressbar() {
  const progressBars = [
    { label: "Happy Customers", percentage: 98 },
    { label: "Mega Savings", percentage: 75 },
    { label: "Product quality", percentage: 99 },
    { label: "Team work", percentage: 95 },
    { label: "Security ", percentage: 100 },
  ];

  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const percentage = bar.getAttribute("data-percentage");
            bar.style.width = `${percentage}%`;
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="mb-0 mb-lg-5 overflow-hidden" id="service">
        <div className="container mt-5">
          <div className="row">
            <div
              className="col-12 col-md-6 p-0 m-0 order-1 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <div className="h-100 allimg ">
                <div className="test-shine ">
                  <div className="</div>" style={{ height: 450 }}>
                    <video
                      src={video} // Path to the video
                      className="img-fluid w-100 h-100 object-fit-cover "
                      autoPlay
                      loop
                      muted
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 p-0 m-0 product_high order-0 order-lg-1"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-once="true"

            >
              <div className="h-100 p-5 d-flex flex-column justify-content-between ">
                <div className="pt-1">
                  {progressBars.map((bar, index) => (
                    <div key={index} className="mb-4 text-white">
                      <div className="d-flex justify-content-between">
                        <div>
                          {bar.label === "CO2 emissions reduced" ? (
                            <>
                              <span className="fw-bold pe-1">CO<sub>2</sub></span> emissions reduced
                            </>
                          ) : (
                            bar.label
                          )}
                        </div>
                        <div>{bar.percentage}%</div>
                      </div>
                      <div className="progress rounded-0" style={{ height: "20px" }}>
                        <div
                          ref={(el) => (progressRefs.current[index] = el)}
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "0%",
                            backgroundImage:
                              "linear-gradient(to right, var(--darkgreen--), var(--green--), var(--white--))",
                            transition: "width 1s ease-in-out",
                          }}
                          aria-valuenow={bar.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-percentage={bar.percentage}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Progressbar;
