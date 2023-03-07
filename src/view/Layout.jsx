import "../core/component/css/Layout.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Modal } from "bootstrap";
import { Form, Link } from "react-router-dom";
import classNames from "classnames";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="row logo-container">
            <div className="col-xl-2 col-3">
              <div className="header-logo">
                <a href="#">Mioto</a>
              </div>
            </div>

            <div className="col-xl-3 col-none info-container">
              <span>
                <i className="fa-solid fa-phone"></i>
                <a href=""> 1900 9217</a>
              </span>
              <span>
                <i className="fa-solid fa-envelope"></i>
                <a href=""> contact@mioto.vn</a>
              </span>
            </div>

            <div className="col-xl-4 col-none info-container">
              <span className="info-containerOwner">
                <a href="" className="become-owner info-container-link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.75 20.4674C17.0931 20.0877 20.5 16.4417 20.5 12C20.5 10.9 20.291 9.84874 19.9106 8.88384L14.9342 11.3721C14.9773 11.5746 15 11.7846 15 12C15 13.3979 14.0439 14.5725 12.75 14.9055V20.4674ZM11.25 20.4674C6.90686 20.0877 3.5 16.4417 3.5 12C3.5 10.9001 3.7089 9.84906 4.08919 8.88428L9.06572 11.3725C9.02266 11.5749 9 11.7848 9 12C9 13.3979 9.95608 14.5725 11.25 14.9055V20.4674ZM14.2631 10.0306L19.2389 7.54264C17.742 5.11678 15.0598 3.5 12 3.5C8.94001 3.5 6.25767 5.11695 4.76082 7.54305L9.73659 10.0309C10.2866 9.39926 11.0967 9 12 9C12.9032 9 13.7131 9.3991 14.2631 10.0306ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                      fill="lightgray"
                    ></path>
                  </svg>
                  Trở thành chủ xe
                </a>
              </span>
            </div>

            <div className="col-xl-2 col-none info-container">
              <div className="row">
                <div className="col-xl-6 info-container-item">
                  <div onClick={handleShow} className=" info-container-link info-container-login">
                    Đăng nhập
                  </div>
                </div>
                <div className="col-xl-6 info-container-item">
                  <button
                    href=""
                    className="btn btn-transparentRegister info-container-link"
                  >
                    Đăng kí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={classNames({show: show},"login")} show={show}>
        <div className="modals">
          <div className="modals-content">
            <div className="modals-header">
              <button className="btn-close" onClick={handleClose}></button>
              <h4>ĐĂNG NHẬP</h4>
            </div>

            <div className="models-body">
              <div className="models-default">
                <div className="line-form has-ico">
                  <div className="wrap-input">
                    <i class="fa-solid fa-envelope"></i>
                    <input
                      type="text"
                      name="ip_phone"
                      placeholder="Điện thoại hoặc email"
                      className="wrap-input-item"
                    />
                  </div>
                </div>
                <div className="line-form has-ico">
                  <div className="wrap-input">
                    <i class="fa-solid fa-lock"></i>
                    <input
                      type="text"
                      name="ip_phone"
                      placeholder="Mật khẩu"
                      className="wrap-input-item"
                    />
                  </div>
                </div>
                <div className="line-form has-ico wrap-forgot">
                  <a href="#">Quên mật khẩu?</a>
                </div>

                <div className="line-form has-ico">
                  <button
                    className="btn btn-login"
                    type="button"
                    name="signUpBtn"
                  >
                    Đăng nhập
                  </button>
                </div>

                <div className="line-form has-ico line-login-text">
                  <p>Bạn chưa là thành viên? <a href="#">Hãy đăng kí ngay!</a></p>
                </div>

                <div className="squaredFour have-label">
                <span className="line"></span>
              <div className="textAlign-center">
                Hoặc đăng nhập bằng tài khoản
              </div>
              <div className="row">
                <div className="col-xl-6 col-6">
                  <button
                    className="btn btn-facebook"
                    type="button"
                    name="signUpBtn"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                    Đăng kí
                  </button>
                </div>
                <div className="col-xl-6 col-6">
                  <button
                    className="btn btn-google"
                    type="button"
                    name="signUpBtn"
                  >
                    <i className="fa-brands fa-google"></i>
                    Đăng kí
                  </button>
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

export default Header;

export const Footers = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="row">
            <div className="col-xl-4 col-12">
              <div className="logo-footer">
                <a href="">Mioto</a>
              </div>
              <ul className="footerIcon-list">
                <li>
                  <a href="#" className="footerIcon-list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7191 19V12.6144H14.8616L15.1831 10.1251H12.7191V8.53603C12.7191 7.81554 12.9184 7.32453 13.9527 7.32453L15.2698 7.32399V5.09746C15.042 5.06786 14.2602 5 13.3502 5C11.4499 5 10.149 6.15988 10.149 8.28949V10.1251H8V12.6144H10.149V19H12.7191Z"
                        fill="#141414"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="footerIcon-list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.8595 9.67843C15.8045 10.3555 16.9597 10.755 18.2079 10.755V8.34838C17.5356 8.34838 16.9099 8.14783 16.3853 7.8061C15.6312 7.31355 15.0873 6.52739 14.9173 5.60967C14.8804 5.41233 14.8595 5.20857 14.8595 5H12.4529L12.4497 14.6457C12.408 15.7254 11.5191 16.5918 10.4298 16.5918C10.0912 16.5918 9.77195 16.5084 9.49118 16.3592C8.84781 16.0206 8.4066 15.3452 8.4066 14.5686C8.4066 13.4536 9.31469 12.5455 10.4298 12.5455C10.6383 12.5455 10.8373 12.5808 11.0266 12.6402V10.1822C10.8309 10.1549 10.6319 10.1389 10.4298 10.1389C7.98785 10.1389 6 12.1267 6 14.5686C6 15.5024 6.2904 16.3704 6.78776 17.086C7.08778 17.5175 7.46161 17.8946 7.89159 18.1962C8.61036 18.7016 9.48636 19 10.4298 19C12.8733 19 14.8595 17.0121 14.8595 14.5686V9.67843Z"
                        fill="#141414"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="footerIcon-list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1364 5H8.86341C6.73313 5 5 6.73321 5 8.86349V15.1365C5 17.2669 6.73313 19 8.86341 19H15.1364C17.2669 19 19 17.2668 19 15.1365V8.86349C19.0001 6.73321 17.2669 5 15.1364 5ZM17.7579 15.1365C17.7579 16.582 16.582 17.7579 15.1365 17.7579H8.86341C7.41805 17.7579 6.24215 16.582 6.24215 15.1365V8.86349C6.24215 7.41813 7.41805 6.24215 8.86341 6.24215H15.1364C16.5819 6.24215 17.7579 7.41813 17.7579 8.86349V15.1365H17.7579Z"
                        fill="#141414"
                      ></path>
                      <path
                        d="M12.002 8.39453C10.0128 8.39453 8.39453 10.0128 8.39453 12.002C8.39453 13.9911 10.0128 15.6093 12.002 15.6093C13.9912 15.6093 15.6094 13.9911 15.6094 12.002C15.6094 10.0128 13.9912 8.39453 12.002 8.39453ZM12.002 14.367C10.6978 14.367 9.63668 13.3061 9.63668 12.0019C9.63668 10.6976 10.6977 9.6366 12.002 9.6366C13.3062 9.6366 14.3673 10.6976 14.3673 12.0019C14.3673 13.3061 13.3061 14.367 12.002 14.367Z"
                        fill="#141414"
                      ></path>
                      <path
                        d="M15.7586 7.3418C15.5192 7.3418 15.2841 7.43868 15.1151 7.60844C14.9453 7.77738 14.8477 8.01256 14.8477 8.25271C14.8477 8.49211 14.9454 8.72721 15.1151 8.89697C15.2841 9.0659 15.5192 9.16361 15.7586 9.16361C15.9987 9.16361 16.2331 9.0659 16.4028 8.89697C16.5726 8.72721 16.6695 8.49203 16.6695 8.25271C16.6695 8.01256 16.5726 7.77738 16.4028 7.60844C16.2339 7.43868 15.9987 7.3418 15.7586 7.3418Z"
                        fill="#141414"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="footerIcon-list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.69769 5C5.67116 5 5 5.67407 5 6.56004C5 7.42644 5.65117 8.11974 6.6583 8.11974H6.67778C7.72439 8.11974 8.37573 7.42644 8.37573 6.56004C8.35616 5.67407 7.72439 5 6.69769 5V5Z"
                        fill="#141414"
                      ></path>
                      <path
                        d="M5.17773 9.35352H8.17871V18.3821H5.17773V9.35352Z"
                        fill="#141414"
                      ></path>
                      <path
                        d="M15.5454 9.14062C13.9265 9.14062 12.8409 10.6619 12.8409 10.6619V9.35253H9.83984V18.3811H12.8407V13.3392C12.8407 13.0693 12.8603 12.7998 12.9396 12.6068C13.1565 12.0678 13.6502 11.5094 14.4793 11.5094C15.5652 11.5094 15.9995 12.3373 15.9995 13.5511V18.3811H19.0002V13.2043C19.0002 10.4311 17.5197 9.14062 15.5454 9.14062V9.14062Z"
                        fill="#141414"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="footerIcon-list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.539C19.405 7.8 18.771 7.973 18.11 8.057C18.79 7.651 19.309 7.013 19.553 6.244C18.919 6.622 18.219 6.889 17.473 7.038C16.871 6.397 16.013 6 15.077 6C13.261 6 11.799 7.474 11.799 9.281C11.799 9.541 11.821 9.791 11.875 10.029C9.148 9.896 6.735 8.589 5.114 6.598C4.831 7.089 4.665 7.651 4.665 8.256C4.665 9.392 5.25 10.399 6.122 10.982C5.595 10.972 5.078 10.819 4.64 10.578C4.64 10.588 4.64 10.601 4.64 10.614C4.64 12.208 5.777 13.532 7.268 13.837C7.001 13.91 6.71 13.945 6.408 13.945C6.198 13.945 5.986 13.933 5.787 13.889C6.212 15.188 7.418 16.143 8.852 16.174C7.736 17.047 6.319 17.573 4.785 17.573C4.516 17.573 4.258 17.561 4 17.528C5.453 18.465 7.175 19 9.032 19C15.068 19 18.368 14 18.368 9.666C18.368 9.521 18.363 9.381 18.356 9.242C19.007 8.78 19.554 8.203 20 7.539Z"
                        fill="#141414"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="footerIcon-list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6703 7.75293C19.486 7.06748 18.9455 6.52715 18.2602 6.34258C17.0081 6 11.9998 6 11.9998 6C11.9998 6 6.9917 6 5.73965 6.32959C5.06748 6.51397 4.51387 7.06758 4.32949 7.75293C4 9.00489 4 11.6013 4 11.6013C4 11.6013 4 14.2108 4.32949 15.4496C4.51406 16.135 5.0543 16.6753 5.73975 16.8599C7.00489 17.2026 12 17.2026 12 17.2026C12 17.2026 17.0081 17.2026 18.2602 16.873C18.9456 16.6885 19.486 16.1482 19.6705 15.4628C19.9999 14.2108 19.9999 11.6145 19.9999 11.6145C19.9999 11.6145 20.0131 9.00489 19.6703 7.75293V7.75293ZM10.4053 13.9999V9.20264L14.5699 11.6013L10.4053 13.9999Z"
                        fill="#141414"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="footerIcon-list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8778 5C8.03995 5.00058 6 7.45937 6 10.1404C6 11.3835 6.69476 12.9346 7.80719 13.4264C8.12453 13.5693 8.08253 13.3949 8.35553 12.3507C8.37712 12.2638 8.36603 12.1885 8.29603 12.1074C6.70584 10.2682 7.9857 6.48694 11.6508 6.48694C16.9552 6.48694 15.9641 13.8265 12.5737 13.8265C11.6998 13.8265 11.0488 13.1405 11.2547 12.2918C11.5044 11.2808 11.9933 10.1941 11.9933 9.46548C11.9933 7.62912 9.25738 7.90154 9.25738 10.3347C9.25738 11.0866 9.52338 11.5941 9.52338 11.5941C9.52338 11.5941 8.64312 15.1501 8.47979 15.8146C8.20328 16.9393 8.51712 18.7599 8.54454 18.9168C8.56145 19.0031 8.65829 19.0305 8.71254 18.9594C8.79946 18.8456 9.86347 17.3278 10.1616 16.2305C10.2701 15.8309 10.7152 14.2092 10.7152 14.2092C11.0086 14.7389 11.8544 15.1822 12.7557 15.1822C15.4367 15.1822 17.3746 12.8255 17.3746 9.90124C17.3652 7.0977 14.966 5 11.8778 5V5Z"
                        fill="#141414"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-8 col-12 part-item">
              <div className="row">
                <div className="col-xl-4 col-4">
                  <h5>Chính sách</h5>
                  <ul className="part-list">
                    <li className="part-list-item">
                      <a href="#">Giới thiệu về Mioto</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Chính sách và quy định</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Quy chế hoạt động</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Bảo mật thông tin</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Giải quyết tranh chấp</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-4">
                  <h5>Tìm hiểu thêm</h5>
                  <ul className="part-list">
                    <li className="part-list-item">
                      <a href="#">Hướng dẫn chung</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Hướng dẫn đặt xe</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Hướng dẫn dành cho chủ xe</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Hướng dẫn thanh toán</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Hỏi và trả lời</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Mioto blog</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Tuyển dụng</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-4">
                  <h5>Đối tác</h5>
                  <ul className="part-list">
                    <li className="part-list-item">
                      <a href="#">Đăng ký chủ xe Mioto</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">Đăng ký GPS MITRACK 4G</a>
                    </li>
                    <li className="part-list-item">
                      <a href="#">
                        Đăng ký Bảo hiểm vật chất & Bảo hiểm TNDS xe ô tô
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
