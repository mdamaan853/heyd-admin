import React,{useState,useEffect} from 'react';
import "./style.scss"
import axios from "axios";
import SubCat from "./Subcat"
import { Link } from "react-router-dom";
import { Row, Container, Col, Card,Accordion,Button} from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { ToastContainer, toast } from "react-toastify";
import Navbar from '.././../Layout/Navbar'
import Sidebar from ".././../Layout/sidebar/Sidebar"
import UpdateCat from "./updateCat";
import { url } from '../../url';

const deleteCat=(id,name)=>{
  if(window.confirm(`you want to delete ${name}`)){
  axios.delete(url+`category/${id}`)
  .then(res => window.location.reload(false))
  .catch(err => console.log(err))
}
}

const GetFuncData = () => {
    const [categorys,setcategorys] = useState([]);
    const [sub,setSub] = useState([]);
    useEffect(() => {
        axios.get(url+`category`)
          .then(res => {
              console.log(res)
              setcategorys(res.data.result)
        }).catch(err =>console.log(err));
        }, []);

        return (
            <header className="translator__header">
                <Navbar/>
                <div class="container-fluid">
                <div className="col-sm-12">
                  <h1 className="my-4">Category List</h1>
                </div>
                 <div className="row">
                 <div class="col-2">
                <Sidebar/>  
                </div>              
                <div className="col-10" >
             <Accordion defaultActiveKey="0" className="d-flex flex-wrap">
                    {categorys.map((cat,index) =>
                 <div class="col-3 my-3" key={cat.id}>
                        <Card>
                            <Accordion.Toggle style={{display:'flex'}} as={Card.Header} eventKey={index + 1}>   
                            
                            <h4>{cat.catName}</h4>
                            <div style={{position:'absolute',right:'0px'}}>
                            <button className="btn" type="button">

                            <Link to={"/updateCat/" + cat.id}>
                              <AiFillEdit size={20} className="editBtn" />
                            </Link>
                          </button>
                          
                            <button
                              className="btn btn-sm"
                              type="button"
                              onClick={() => deleteCat(cat.id,cat.catName)}
                              >
                              <AiFillDelete
                                size={20}
                                className="deleteBtn"
                                color="#922c88"
                                />
                            </button>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index + 1}>
                            <Card.Body>{<SubCat id={cat.id}/>}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </div>
                    )}
                    </Accordion>
                    </div>
                </div>
                </div>
            </header>   
        );
    };
    export default GetFuncData;