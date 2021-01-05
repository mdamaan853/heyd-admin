import React from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { url } from "../../url";
class SubCat extends React.Component {
  state = {
    subCat: "",
  };
  componentDidMount() {
    axios
      .get(url+`category/getsub/${this.props.id}`)
      .then((res) => {
        console.log(res);
        this.setState({ subCat: res.data.result });
      })
      .catch((err) => console.log(err));
  }
deleteSubCat=(id,name)=>{
  if(window.confirm(`you want to delete ${name}..?`)){
    axios.delete(url+`category/${id}`)
    .then(res => window.location.reload(false))
    toast('Deleted Successfully')
    .catch(err => console.log(err))
  }
}

  render() {
    const { subCat } = this.state;
    return (
      <div>
        {subCat.length
          ? subCat.map((cat) => (
              <div key={cat.id}>
                <li>{cat.catName}          <button
                              className="btn btn-sm"
                              type="button"
                              onClick={() => this.deleteSubCat(cat.id,cat.catName)}
                            >
                              <AiFillDelete
                                size={15}
                                className="deleteBtn"
                                color="#922c88"
                              />
                            </button></li>
              </div>
            ))
          : 'No Sub Category available'}

        {/* </li> */}
      </div>
    );
  }
}
export default SubCat;
