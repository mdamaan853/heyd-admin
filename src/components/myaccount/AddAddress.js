// import React, { useState } from "react";
// // import AddressCard from "../../common/AddressCard";
// import axios from "axios";
// import { Button, Modal } from "react-bootstrap";
// // import AddAddressModal from "../../common/modal/AddAddressModal";
// const AddAddress = (props) => {
//   const [result, setResult] = useState({
//     userId: "",
//     address: "",
//     state: "",
//     pincode: "",
//     phoneNumber: "",
//   });
//   const handleChange = (event) => {
//     setResult({
//       ...result,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://apis.restroqr.link:4040/Address", result)
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Add Address
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={submitHandler}>
//             <input
//               className="input"
//               type="text"
//               name="address"
//               value={result.address}
//               onChange={handleChange}
//               placeholder="Address"
//             />
//             <input
//               className="input"
//               type="text"
//               name="pincode"
//               value={result.pincode}
//               onChange={handleChange}
//               placeholder="Pincode"
//             />
//             <input
//               className="input"
//               type="text"
//               name="state"
//               value={result.state}
//               onChange={handleChange}
//               placeholder="state"
//             />
//             <input
//               className="input"
//               type="text"
//               name="pincode"
//               value={result.pincode}
//               onChange={handleChange}
//               placeholder="Pincode"
//             />
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//           <Button onClick={submitHandler}>Save</Button>
//           {/* <ToastContainer position="top-center" /> */}
//         </Modal.Footer>
//       </Modal>
//     );
//   };
// };
// export default AddAddress;
