import React, { Component } from 'react'
export class Pagination extends Component {
    render() {
        const {currentPage, postsPerPage, totalPosts, paginate, nextPage, prevPage } = this.props;
        const pageNumbers = [];
        for (let i = 1; i <=Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <nav>
         
                <ul className="pagination justify-content-center">
                    {currentPage == 1 ?'':(<li className="page-item">
                   
                        <a href className="page-link" href="#" onClick={() => prevPage()}>Previous</a>
                    </li>)}
                    {pageNumbers.map(num => (
                        <li className="page-item" key={num}>
                            <button onClick={() => paginate(num)} href="#" className="page-link">{num}</button>
                        </li>
                    ))}
                  
                    {currentPage == Math.ceil(totalPosts / postsPerPage) ?'':(
                    <li className="page-item">
                        <a href className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                    </li>)}
                </ul>
               
            </nav>
        )
    }
}
export default Pagination