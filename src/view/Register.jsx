
import "../core/component/css/Layout.css";
import Header, { Footers } from "./Layout";

function Register() {
  return (
    <div className="mioto-layout">
      <Header / >
      <section className="register">
        <div className="container">
          <div className="mioto-default forms">
            <h2 className="title-form">Đăng kí tài khoản</h2>
            <div className="line-form has-ico">
              <div className="wrap-input">
                <i className="fa-solid fa-phone"></i>
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
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="ip_phone"
                  placeholder="Tên hiện thị"
                  className="wrap-input-item"
                />
              </div>
            </div>
            <div className="line-form">
              <div className="row">
                <div className="wrap-input col-xl-6 col-6">
                  <input
                    type="text"
                    name="ip_phone"
                    placeholder="Mật khẩu"
                    className="wrap-input-item"
                  />
                </div>
                <div className="wrap-input col-xl-6 col-6">
                  <input
                    type="text"
                    name="ip_phone"
                    placeholder="Xác nhận mật khẩu"
                    className="wrap-input-item"
                  />
                </div>
              </div>
            </div>
            <div className="line-form">
              <div className="wrap-input">
                <input
                  type="text"
                  name="ip_phone"
                  placeholder="Nhập mã giới thiệu nếu có"
                  className="wrap-input-item"
                />
              </div>
            </div>
            <div className="squaredFour have-label">
              <input type="checkbox" />
              <label htmlFor="#" className="form-default">
                <p>
                  Tôi đã đọc và đồng ý với
                  <a href="_blank" className="form-default-link">
                    {" "}
                    chính sách{" "}
                  </a>
                  của Mioto
                </p>
              </label>
              <button
                className="btn btn-register"
                type="button"
                name="signUpBtn"
              >
                Đăng kí
              </button>
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
      </section>
      <Footers />
    </div>
  );
}

export default Register;
