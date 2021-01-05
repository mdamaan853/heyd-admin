import React from "react";
import axios from "axios";
import { Row, Container, Col, Card } from "react-bootstrap";
import Navbar from "../../Layout/Navbar";
import Posts from "./Post";
import Pagination from "../Expenses/Pagination";
import Sidebar from "../../Layout/sidebar/Sidebar"
import './style.css';
import { url } from "../../url";
class Pro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      tax: [],
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
    axios.get(url+`tax`).then(
      (res) => {
        console.log(res);
        this.setState({ loading: true });
        this.setState({ tax: res.data.result });
        this.setState({ loading: false });
      },
      (error) => {
        this.setState({ error });
      }
    );
  }
  render() {
    const { error } = this.state;
    const { currentPage, postsPerPage, tax, loading } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = tax.slice(indexOfFirstPost, indexOfLastPost);
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
      <div className="row">
      <div class="col-2">
     <Sidebar/>  
     </div>  
          <Container>
            <Row>
              <Col>
                <center>
                    <Col md={8}>
                      <Posts
                        posts={currentPosts}
                        loading={loading}
                        currentPage={this.state.currentPage}
                      />
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={tax.length}
                        currentPage={this.state.currentPage}
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                      />
                    </Col>
                </center>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
        </div>
      );
    }
  }
}

export default Pro;
