import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Offers({ result }) {
  return (
    <div className="card offer-card shadow-md mb-4">
      <div className="card-body">
        <h5 className="card-title">
          {result.couponCode}
          {/* <Image src={"img/1.png"} alt="logo" className="imageclassName" /> */}
        </h5>

        <h6 className="card-subtitle mb-2 text-block">{result.title}</h6>
        <p className="text-muted">{result.desc}</p>
        {/* <Button variant="link" className="card-btn mr-3 p-0">
            {props.copyBtnText}
          </Button> */}

        {/* {props.moreLinkText ? (
          <Link to={props.morelinkUrl} className="card-link">
            {props.moreLinkText}
          </Link>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}

// CouponCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   logoImage: PropTypes.string,
//   subTitle: PropTypes.string,
//   imageAlt: PropTypes.string,
//   imageclassName: PropTypes.string,
//   morelinkUrl: PropTypes.string,
//   moreLinkText: PropTypes.string,
//   copyBtnText: PropTypes.string,
//   couponCode: PropTypes.string,
//   noBorder: PropTypes.bool,
// };
// CouponCard.defaultProps = {
//   logoImage: "",
//   subTitle: "",
//   imageAlt: "",
//   imageclassName: "",
//   morelinkUrl: "#",
//   //   moreLinkText: "KNOW MORE",
//   copyBtnText: "",
//   couponCode: "",
//   noBorder: true,
// };

export default Offers;
