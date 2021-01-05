// import React from "react";
// import { Link } from "react-router-dom";
// import { Image, Button } from "react-bootstrap";
// import PropTypes from "prop-types";

// function CouponCard(props) {
//   return (
//     <div
//       className={
//         "card offer-card shadow-sm mb-4" + (props.noBorder ? " border-0" : "")
//       }
//     >
//       <div className="card-body">
//         {props.logoImage || props.couponCode ? (
//           <h5 className="card-title">
//             {props.logoImage ? (
//               <Image
//                 src={props.logoImage}
//                 alt={props.imageAlt}
//                 className={props.imageclassName}
//               />
//             ) : (
//               ""
//             )}
//             {props.couponCode ? props.couponCode : ""}
//           </h5>
//         ) : (
//           ""
//         )}
//         <h6 className="card-subtitle mb-2 text-block">{props.title}</h6>
//         {props.subTitle ? <p className="card-text">{props.subTitle}</p> : ""}
//         {props.copyBtnText ? (
//           <Button variant="link" className="card-btn mr-3 p-0">
//             {props.copyBtnText}
//           </Button>
//         ) : (
//           ""
//         )}
//         {props.moreLinkText ? (
//           <Link to={props.morelinkUrl} className="card-link">
//             {props.moreLinkText}
//           </Link>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// }

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

// export default CouponCard;
