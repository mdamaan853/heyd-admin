import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, Media } from "react-bootstrap";
import Icofont from "react-icofont";
// import PropTypes from "prop-types";
import axios from "axios";

function AddressCard({ result }) {
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [showAddressModal, setShowAddressModal] = useState(false);
  // const handlehideDeleteModal = () => setShowDeleteModal(false);
  // const handlehideAddressModal = () => setShowAddressModal(false);
  // const handleShowDeleteModal = () => setShowDeleteModal(true);
  // const handleShowAddressModal = () => setShowAddressModal(true);
  const [address, setAddress] = useState([]);
  const removeData = (id) => {
    let url = `http://apis.restroqr.link:4040/Address/${id}`;

    axios.delete(url).then((res) => {
      const del = address.filter((res) => res.id !== id);
      setAddress(del);
      toast("please referesh page");
      console.log("res", res);
    });
  };
  return (
    <Card className="bg-white shadow addresses-item mb-4 ">
      <div className="gold-members p-4">
        <Media>
          <div className="mr-3">
            <Icofont icon="ui-location" className="icofont-3x" />
          </div>
          <div className="media-body">
            <h6 className="mb-1 text-secondary">{result.address}</h6>
            <p className="text-black">
              {result.state}&nbsp;,Pin Code:-{result.pincode}
            </p>

            <p className="text-black">{result.phoneNumber}</p>
            <p className="mb-0 text-black font-weight-bold">
              <Link
                to={`/update/${result.id}`}
                className="user-edit mr-3"
                // onClick={result.onDeleteClick}
              >
                <Icofont icon="ui-edit" /> EDIT
              </Link>
              <Link
                className="text-danger"
                onClick={() => removeData(result.id)}
              >
                <Icofont icon="ui-delete" /> DELETE
              </Link>
              <ToastContainer />
            </p>
          </div>
        </Media>
      </div>
    </Card>
  );
}

// AddressCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   icoIcon: PropTypes.string.isRequired,
//   iconclassName: PropTypes.string,
//   address: PropTypes.string,
//   onEditClick: PropTypes.func.isRequired,
//   onDeleteClick: PropTypes.func.isRequired,
// };

export default AddressCard;
