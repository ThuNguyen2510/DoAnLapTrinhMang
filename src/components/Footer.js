import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
class Footer extends React.Component{
    render() {
        return (
    
          <div>
          <footer className="page-footer font-small mdb-color lighten-3 pt-4">
            <div className="container text-center text-md-left">
              <div className="row">
                <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                  {/* Content */}
                  <h5 className="font-weight-bold text-uppercase mb-4">TVT COMICS</h5>
                  <p>Here you can use rows and columns to organize your footer content.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
                    esse
                    quasi, veritatis totam voluptas nostrum.</p>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                  <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        <Link> PROJECTS</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link>ABOUT US</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link>BLOG</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link>AWARDS</Link>
                      </p>
                    </li>
                  </ul>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                  <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p><i className="fas fa-home mr-3" /> Đà Nẵng, Việt Nam</p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope mr-3" /> info@gmail.com</p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                    </li>
                  </ul>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                  {/* Social buttons */}
                  <h5 className="font-weight-bold text-uppercase mb-4 ">Follow Us</h5>
                  <ul className="list-unstyled list-inline text-center">
                  {/* Facebook */}
                  <li className="list-inline-item">
                  <a type="button" className="btn-floating btn-facebook mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                  </li>
                  {/* Twitter */}
                  <li className="list-inline-item">
                  <a type="button" className="btn-floating btn-tw mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                  </li>
                  {/* Google +*/}
                  <li className="list-inline-item">
                  <a type="button" className="btn-floating btn-gplus mx-1">
                    <i className="fab fa-google-plus-g" />
                  </a>
                  </li>
                  {/* Dribbble */}
                  <li className="list-inline-item">
                  <a type="button" className="btn-floating btn-dribbble mx-1">
                    <i className="fab fa-dribbble" />
                  </a>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright text-center py-2">© 2018 Copyright:
              <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
          </footer>
          </div>
        );
      }
}
export default Footer;