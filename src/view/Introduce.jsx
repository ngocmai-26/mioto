import logoIntroduce from "../assets/img/logoIntroduce.jpg";
import logoZalo from "../assets/img/zalo.png";
import banner from '../assets/img/banner.png';
import Header, { Footers } from "./Layout";
function Introduce() {
  return (
    <>
      <Header></Header>
      <div className="introduce">
        <div className="container">
          {/* <header className="introduce-header">
            <div className="row">
              <div className="col-xl-4">
                <div className="introduce-logo">
                  <img src={logoIntroduce} alt="logoIntroduce" />
                </div>
              </div>

              <div className="col-8">
                <div className="row">
                  <div className="col-xl-4 shol shol1">
                    <p>Đ/c: CÔNG TY TNHH THUÊ XE SÀI GÒN - MST: 0314086819 </p>
                    <p>Đ/c: 238/12B LIÊN TỈNH 5, PHƯỜNG 6, QUẬN 8. TP HCM</p>
                  </div>

                  <div className="col-xl-4 shol shol2">
                    <p>Mon -Sat 8:00 - 22:00 Chủ Nhật 7: 00</p>
                  </div>

                  <div className="col-xl-4 shol shol3">
                    <p>Tel: 0917782929 - Zalo</p>
                    <p>Hotline: 0819553355 - 0917782929 - 0931273834</p>
                  </div>
                </div>
              </div>
            </div>
          </header> */}

          <div style={{height:"300px",margin:"80px 0px"}}>
            <img src={banner} width="100%" height={"100%"}/>
          </div>
          {/* <nav className="introduce-menu">
            <ul className="menu-top">
              <li className="menu--item">
                <a href="#" className="menu--item-link">
                  Trang chủ
                </a>
              </li>

              <li className="menu--item ">
                <a href="#" className="menu--item-link active">
                  Giới thiệu
                </a>
              </li>

              <li className="menu--item">
                <a href="#" className="menu--item-link">
                  Dòng xe
                </a>
                <ul className="menu--item-list" id="vehicles">
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LỊCH 30 CHỖ TPHCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LỊCH GIÁ RẺ TẠI TPHCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LỊCH TPHCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LICH 29 CHỖ TPHCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LỊCH{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LỊCH 16 CHỖ TPHCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      Thuê Xe Du Lịch 29 chỗ giá rẻ tại tphcm{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      Thuê Xe Du Lịch 45 chỗ{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LỊCH 7 CHỖ TPHCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      Thuê Xe Du Lịch 4 chỗ{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE GIÁ RẺ{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      BẢNG GIÁ THUÊ XE DU LỊCH TẠI TPHCM{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu--item">
                <a href="#" className="menu--item-link">
                  Tour cố định
                </a>
                <ul className="menu--item-list" id="vehicles">
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      THUÊ XE DU LỊCH 30 CHỖ TPHCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      TP HCM-ĐÀ LẠT-TP HCM{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      CÂN THƠ-SỐC TRĂNG-BẠC LIÊU-CÀ MAU{" "}
                    </a>
                  </li>
                  <li className="menu-item-mini">
                    <a href="" className="menu--mini-link">
                      MŨI NÉ-PHAN THIẾT{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu--item">
                <a href="#" className="menu--item-link">
                  Dịch vụ
                </a>
              </li>

              <li className="menu--item">
                <a href="#" className="menu--item-link">
                  Báo giá
                </a>
              </li>

              <li className="menu--item">
                <a href="#" className="menu--item-link">
                  Liên hệ
                </a>
              </li>
            </ul>
            <div className="menu-search">
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </nav> */}

          <section className="content">
            <div className="container-introduce">
              <div className="content-header">
                <ul className="breadcrumb">
                  <li className="breadcrumb--item">
                    <a href="" className="breadcrumb--item-link">
                      <i class="fa-solid fa-house"></i> Trang chủ
                    </a>
                  </li>
                  <li className="breadcrumb--item breadcrumb-link">
                    <a href="" className="breadcrumb--item-link">
                      Giới thiệu
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content-body">
                <div className="title">
                  <h5>Giới thiệu</h5>
                </div>
                <div className="content--item">
                  <h1>Giới thiệu về chúng tôi</h1>

                  <div className="content--item-text">
                    <p>
                      <b className="content--item-text1">
                        <span>KARRY</span>
                      </b>
                      <span>
                        Chúng tôi tạo nên khác biệt bằng việc luôn cam kết mang
                        đến những trải nghiệm hành trình tuyệt vời, là một trong
                        những Công ty cho{" "}
                      </span>
                      <a href="" className="content--item-text-link">
                        thuê xe du lịch{" "}
                      </a>
                      <span>
                        online hàng đầu tại TP. Hồ Chí Minh. Chúng tôi có đội
                        ngũ tài xế chuyên nghiệp và số lượng các loại xe du lịch
                        đời mới có thể đáp ứng được mọi nhu cầu đa dạng của thị
                        trường với chất lượng phục vụ tốt nhất.
                      </span>
                    </p>
                    <p>
                      Chúng tôi chuyên cho thuê xe du lịch 4 chỗ – 7 chỗ - 29
                      chỗ - 45 chỗ như sau:{" "}
                    </p>
                    <ol>
                      <li>
                        <span>
                          * Cho thuê xe phục vụ khách tham quan du lịch.
                        </span>
                      </li>
                      <li>
                        <span>
                          * Cho thuê xe đi một chiều đến các tỉnh thành.
                        </span>
                      </li>
                      <li>
                        <span>* Cho thuê xe đi tỉnh, đón tiễn sân bay.</span>
                      </li>
                      <li>
                        <span>* Cho thuê xe văn phòng ngắn hạn – dài hạn.</span>
                      </li>
                      <li>
                        <span>* Cho thuê xe hoa, xe cưới.</span>
                      </li>
                    </ol>
                    <p>
                      <span>
                        <strong>Chất lượng tạo nên thành công </strong>- Với
                        định hướng kinh doanh là trở thành một đối tác có giá
                        trị và đáng tin cậy của mọi khách hàng, chúng tôi không
                        ngừng tập trung nâng cao chất lượng phục vụ, từng bước
                        xây dựng quy trình kinh doanh chuyên nghiệp hiện đại để
                        đem đến sự tiện lợi, hài lòng và giá cả cạnh tranh cho
                        khách hàng trong mọi chuyến đi.
                      </span>
                    </p>
                    <p>
                      Đáp lại sự tin yêu và hỗ trợ của quý khách hàng cũng như
                      của các đối tác đã giúp
                      <a href=""> Công ty TNHH Thuê Xe Sài Gòn </a>
                      phát triển mạnh mẽ trong những năm qua, chúng tôi không
                      ngừng đầu tư phương tiện với trang thiết bị nội thất hiện
                      đại, tiếp tục tập trung nâng cao sự chuyên nghiệp và chất
                      lượng dịch vụ
                      <span>
                        với mục tiêu:
                        <strong>
                          AN TOÀN - UY TÍN - CHẤT LƯỢNG - GIÁ CẢ CẠNH TRANH{" "}
                        </strong>
                      </span>
                      <b>luôn đem đến sự hài lòng nhất cho khách hàng.</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-btn">
                <div className="btn--share">
                  <a href="#" className="btn--share-item btn-facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                    Facebook
                  </a>
                  <a href="#" className="btn--share-item btn-twitter">
                    <i class="fa-brands fa-twitter"></i>
                    Twitter
                  </a>
                  <a href="#" className="btn--share-item btn-email">
                  <i class="fa-solid fa-envelope"></i>
                    Email
                  </a>
                  <a href="#" className="btn--share-item btn-pinterest">
                    <i class="fa-brands fa-pinterest-p"></i>
                    Pinterest
                  </a>
                  <a href="#" className="btn--share-item btn-more">
                    <i class="fa-solid fa-plus"></i>
                    Thêm
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* <footer className="footerIntroduce">
            <div className="wrapper">
              <div className="row">
                <div className="col-xl-4">
                  <h3 className="name-company">THÔNG TIN CÔNG TY</h3>
                  <div className="footer--address">
                    <p className="footer--address-item">
                      <span className="footer-icon">
                        <img
                          src="https://chothuexedulichtphcm.com.vn/images/sp/f1.png"
                          alt="icon-address"
                        />
                      </span>
                      <span className="footer-text">
                        CÔNG TY TNHH THUÊ XE SÀI GÒN - MST: 0314086819{" "}
                      </span>
                    </p>

                    <p className="footer--address-item">
                      <span className="footer-icon">
                        <img
                          src="https://chothuexedulichtphcm.com.vn/images/sp/f2.png"
                          alt="icon-hotline"
                        />
                      </span>
                      <span className="footer-text">
                        Hotline:0819553355 - 0917782929 - 0931273834
                      </span>
                    </p>

                    <p className="footer--address-item">
                      <span className="footer-icon">
                        <img
                          src="https://chothuexedulichtphcm.com.vn/images/sp/f3.png"
                          alt="icon-email"
                        />
                      </span>
                      <span className="footer-text">
                        Email: congtythuexesaigon@gmail.com
                      </span>
                    </p>
                  </div>

                  <div className="footer-mxh">
                    <ul className="mxh-list">
                      <li className="mxh-item">
                        <a href="#">
                          <img src={logoZalo} alt="zalo" />
                        </a>
                      </li>

                      <li className="mxh-item">
                        <a href="#">
                          <img
                            src="https://chothuexedulichtphcm.com.vn/thumb/45x45/1/upload/hinhanh/tai-xuong-2996.jpg"
                            alt="facebook"
                          />
                        </a>
                      </li>

                      <li className="mxh-item">
                        <a href="#">
                          <img
                            src="https://chothuexedulichtphcm.com.vn/thumb/45x45/1/upload/hinhanh/5n20-5199.png"
                            alt="in"
                          />
                        </a>
                      </li>

                      <li className="mxh-item">
                        <a href="#">
                          <img
                            src="https://chothuexedulichtphcm.com.vn/thumb/45x45/1/upload/hinhanh/5n22-6227.png"
                            alt="in"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-4">
                  <h3 className="name-company">THÔNG TIN CÔNG TY</h3>
                  <div className="link-footer">
                    <p>
                      <a href="#" title="Đưa rước tận nơi">
                        Đưa rước tận nơi
                      </a>
                    </p>
                    <p>
                      <a href="#" title="Nơi đáng tin cậy">
                        Nơi đáng tin cậy
                      </a>
                    </p>
                    <p>
                      <a href="#" title="Xe chất lượng cao">
                        Xe chất lượng cao
                      </a>
                    </p>
                    <p>
                      <a href="#" title="Đảm bảo hiệu quả">
                        Đảm bảo hiệu quả
                      </a>
                    </p>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="map-home">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9760360654323!2d106.65308231411613!3d10.736330262869945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6e5481cd57%3A0x70d5bc14b92b97db!2zVEhVw4ogWEUgRFUgTOG7ikNIIFRQSENNIC0gQ8OUTkcgVFkgVE5ISCBUSFXDiiBYRSBTw4BJIEfDkk4!5e0!3m2!1svi!2s!4v1639448632889!5m2!1svi!2s"
                      className="maphome-item"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="fix_footer">
              <div className="fix_footer-wrapper">
                <div className="copy">
                  Copyright © 2018
                  <span>CÔNG TY TNHH THUÊ XE SÀI GÒN</span>. Design by Nina.vn
                </div>
              </div>
            </div>
          </footer> */}
        </div>

        <div className="ser_onl">
          <div className="label_serv_onl">Chat với chúng tôi</div>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Introduce;
