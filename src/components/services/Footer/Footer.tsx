import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="row">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="row">
            Real-Campers Copyright © 2024 Real-Campers - All rights reserved || Designed
            By: Atif
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
