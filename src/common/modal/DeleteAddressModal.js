// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import axios from "axios";
// function DeleteAddressModal(props) {
//   const [result, setResult] = useState({});

//   const deleteProduct = (id) => {
//     console.log("deleted");
//     const addesses = {
//       id: result.id,
//       userId: result.userId,
//       address: result.address,
//       state: result.state,
//       phoneNumber: result.phoneNumber,
//       pincode: result.pincode,
//     };
//     axios.delete(`http://apis.restroqr.link:4040/Address/${id}`).then((res) => {
//       const data = addesses.filter((result) => result.id !== id);
//       setResult(data);
//     });
//   };
//   return (
//     <div>
//       <Modal show={props.show} onHide={props.onHide} centered size="sm">
//         <Modal.Header closeButton={true}>
//           <Modal.Title as="h5" id="delete-address">
//             Delete
//           </Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           {/* <p className="mb-0 text-black">
//             Are you sure you want to delete this xxxxx?
//           </p> */}
//         </Modal.Body>

//         <Modal.Footer>
//           <Button
//             type="button"
//             onClick={props.onHide}
//             variant="outline-primary"
//             className="d-flex w-50 text-center justify-content-center"
//           >
//             CANCEL
//           </Button>
//           <Button
//             type="button"
//             variant="primary"
//             className="d-flex w-50 text-center justify-content-center"
//             onClick={() => {
//               deleteProduct(result.id);
//             }}
//           >
//             DELETE
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default DeleteAddressModal;
