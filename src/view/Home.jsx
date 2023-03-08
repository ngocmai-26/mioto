import Header from "./Layout";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";

import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";

function Home() {
  return (
    <>
      <Header />
      <div className="home-body">
        <div className="home-body-slide">
          <div className="home-box">
            <h1 className="slogan landing-text">
              MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH
            </h1>
            <div className="home-box-service">
              <div className="search-service--wrapper">
                <div className="tabs-left">
                  <a href="" className="active">
                    <div className="service-box ">
                      <img src={icon1} alt="" />
                      <p>Xe tự lái</p>
                    </div>
                  </a>
                  <a href="">
                    <div className="service-box">
                      <img src={icon2} alt="" />
                      <p>Xe có tài xế</p>
                    </div>
                  </a>
                </div>

                <div className="search-service--wrapper-box">
                  <div className="wd-search">
                    <div className="wd-search__wrapper">
                      <div className="form-search ">
                        <label htmlFor="" className="home-label">
                          Địa điểm
                        </label>
                        <div className="wrap-input ">
                          <i class="fa-solid fa-location-dot"></i>
                          <div className="here-autocomplete search--address">
                            <input
                              type="text"
                              placeholder="Thành phố Hồ Chí Minh, Việt Nam"
                              value="Thành phố Hồ Chí Minh, Việt Nam"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-search">
                        <label htmlFor="" className="home-label">
                          Bắt đầu
                        </label>
                        <div className="wrap-input">
                          <div className="here-autocomplete">
                            <input
                              type="text"
                              placeholder="Thành phố Hồ Chí Minh, Việt Nam"
                              value="Thành phố Hồ Chí Minh, Việt Nam"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-search">
                        <label htmlFor="" className="home-label">
                          Kết thúc
                        </label>
                        <div className="wrap-input">
                          <div className="here-autocomplete">
                            <input
                              type="text"
                              placeholder="Thành phố Hồ Chí Minh, Việt Nam"
                              value="Thành phố Hồ Chí Minh, Việt Nam"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="btn-homeSearch">
                        <a href="" className="btn btn-search-car">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          <span>Tìm xe ngay</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="insurance-partner">
            <p className="Lstitle">ĐỐI TÁC BẢO HIỂM</p>
            <div className="partner-logo hasCursor">
              <div className="row">
                <div className="col-xl-4">
                  <img
                    src="https://www.mioto.vn/static/media/global-care.f6fdc8ef.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-4">
                  <img
                    src="https://www.mioto.vn/static/media/mic.e9091023.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-4">
                  <img
                    src="https://www.mioto.vn/static/media/l_pjico.bb9b4a65.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-promo">
          <div className="container">
            <h4 className="home-promo-title">Ưu đãi hiện hành</h4>
            <Carousel show={3.5} slide={2} transition={0.5}>
              <div className="fix-img">
                <img
                  src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                  alt=""
                  className="fix-img-slide"
                />
              </div>
              <div className="fix-img">
                <img
                  src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                  alt=""
                  className="fix-img-slide"
                />
              </div>
              <div className="fix-img">
                <img
                  src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                  alt=""
                  className="fix-img-slide"
                />
              </div>
              <div className="fix-img">
                <img
                  src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                  alt=""
                  className="fix-img-slide"
                />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="tutorial__sect">
          <div className="container">
          <div className="tutorial__sect-background">
            
            </div>
            <h4 className="tutorial__sect--title">Hướng dẫn thuê xe</h4>

            <div className="row step-box__wrap">
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-1.c204d3e1.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Đặt xe với Mioto</h5>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-2.0bcadc00.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Nhận xe hoặc giao tận nơi</h5>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-3.5ee48572.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Trải nghiệm chuyến đi</h5>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-4.518ab6a3.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Kết thúc giao dịch</h5>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
          
        </div>

        <div className="owner__sect">
          <div className="container">
            <div className="inner__wrap">
              <h3>Bạn muốn cho thuê xe</h3>
              <p>Hãy đăng kí trở thành đối tác của chúng tôi ngay để có cơ hội kiếm thêm thu nhập hằng tháng.</p>
              <div className="inner__wrap--btn">
                <a href="#" className="btn btn-find btn--m">Tìm hiểu ngay</a>
                <a href="#" className="btn btn-registerCar btn--m">Đăng ký xe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
