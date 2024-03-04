import { Col, Container, Row } from "react-bootstrap";
import "../../styles/Footer.css";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import span from "../../assets/images/span.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <h1 className="footer_title">Scan. Detect. Remove.</h1>
                <div className="d-flex flex-row text-white  mb-3 social_media_icons">
                  <div className="  social_media_icon">
                    <img src={twitter} alt="twitter" />
                  </div>
                  <div className="  social_media_icon">
                    <img src={facebook} alt="facebook" />
                  </div>
                  <div className="  social_media_icon">
                    <img src={youtube} alt="youtube" />
                  </div>
                </div>
                <div style={{ fontSize: "11px" }}>
                  <a href="" className=" text-white pe-4">
                    Privacy Policy
                  </a>
                  <a href="" className="text-white">
                    Terms of Service
                  </a>
                </div>
                <div className="mt-3 copywrite_text">
                  <p>
                    Copyright © 2022 Certo Software Limited | Registered in
                    England & Wales No. 10072356
                  </p>
                  <p>Designed & developed by Bigger Picture</p>
                </div>
              </Col>
              <Col>
                <h1 className="footer_second_title">Miro .</h1>

                <div className="d-flex flex-row gap-5 align-items-center">
                  <img
                    src={span}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <h3 className="second_title_tags">iPhone</h3>
                </div>
                <div className="d-flex flex-row gap-5 align-items-center">
                  <img
                    src={span}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <h3 className="second_title_tags">Android</h3>
                </div>
                <div className="d-flex flex-row gap-5 align-items-center">
                  <img
                    src={span}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <h3 className="second_title_tags">Help</h3>
                </div>
                <div className="d-flex flex-row gap-5 align-items-center">
                  <img
                    src={span}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <h3 className="second_title_tags">About</h3>
                </div>
                <div className="d-flex flex-row gap-5 align-items-center">
                  <img
                    src={span}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <h3 className="second_title_tags">Insights</h3>
                </div>
              </Col>
            </Row>
            <div className="mt-5">
              <p className="trademark_text">
                Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
                registered in the U.S. and other countries. App Store is a
                service mark of Apple Inc. Android, Google Play and the Google
                Play logo are trademarks of Google LLC.
              </p>
            </div>
          </Col>
          <Col>
            <div className="newsletter p-5">
              <h4>Sign up to our newsletter</h4>
              <p>
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>
              <div className="input-group mb-3 newsletter_input">
                <input
                  type="text"
                  className="form-control rounded-start-pill"
                  placeholder="Email address"
                  aria-label="Email address"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary rounded-end-pill"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
