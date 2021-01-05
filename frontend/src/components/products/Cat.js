import React from "react";
import axios from "axios";
import { Row, Container, Col, Card } from "react-bootstrap";
import Navbar from "../../Layout/Navbar";
import Category from "./Category";
import AddCat from './AddCat';
import Paginations from "./Paginations";
import Sidebar from "../../Layout/sidebar/Sidebar"
import { url } from "../../url";
// import './style.css';
class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      categorys: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 8,
    };
  }
    // if(props.product){
    //   this.state=props.product
    // }else {
    //   this.state =this.initialState;
    // }


  componentDidMount() {
    axios.get(url+`product`)
    .then(
      (res) => {
        console.log(res);
        this.setState({ loading: true });
        this.setState({ categorys: res.data.result });
        this.setState({ loading: false });
      },
      (error) => {
        this.setState({ error });
      }
    );
  }
  render() {
    const { error } = this.state;
    const { currentPage, postsPerPage, categorys, loading } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = categorys.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts);
    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <Navbar />
          <div class="container-fluid">
        <div class="row">
        <div class="col-2">
                <Sidebar/>  
                </div> 
                <div className="col-10" >
        
            <Row>
              <Col>
              <center>
                <Card.Title>
                  <h1>Category List</h1>
                </Card.Title>
                <AddCat />
                <br />
                <Card.Body>
                  <Col md={12}>
                    <Category 
                      posts={currentPosts}
                      loading={loading}
                      currentPage={this.state.currentPage}
                    />
                    <Paginations
                      postsPerPage={postsPerPage}
                      totalPosts={categorys.length}
                      currentPage={this.state.currentPage}
                      paginate={paginate}
                      nextPage={nextPage}
                      prevPage={prevPage}
                    />
                  </Col>
                </Card.Body>
                </center>
              </Col>
            </Row>
         
        </div>
        </div>
        </div>
        </div>
      );
    }
  }
}
export default Cat;
