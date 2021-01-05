import React, { Component } from 'react'
import Navbar from '../Layout/Navbar'
import LineChat from './Chart';
import Sidebar from "../Layout/sidebar/Sidebar";
import { Card,Button } from "react-bootstrap"
import "./style.css";
export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                 <div className="row">
                 <div className="col-2">
                <Sidebar/>   
                </div> 
                <div className="col-10" >
                <h1 className="my-4">Dashboard</h1>
                <div className="row mt-5">
                    <div className="col-3 cen-card card-align" >
                      <Card className="card-dash">
                        <Card.Img variant="top" />
                        <h1 className="mb-0 card-font">Total Users</h1>
                        <svg style={{marginLeft:'20px'}} id="Capa_1" enableBackground="new 0 0 512 512" height="250px" viewBox="0 0 512 512" width="250px" xmlns="http://www.w3.org/2000/svg"><g><circle cx="432" cy="152" fill="#00357b" r="55"/><path d="m432 207v-110c30.33 0 55 24.67 55 55s-24.67 55-55 55z" fill="#001737"/><path d="m512 308.49v108.17c0 16.73-13.66 30.34-30.46 30.34h-105.48c-8.28 0-15-6.72-15-15 0-14.583-8.06-88.471-8.06-123.51 0-37.21 30.46-67.49 67.9-67.49h23.2c37.44 0 67.9 30.28 67.9 67.49z" fill="#00357b"/><path d="m512 308.49v108.17c0 16.73-13.66 30.34-30.46 30.34h-49.54v-206h12.1c37.44 0 67.9 30.28 67.9 67.49z" fill="#001737"/><circle cx="80" cy="152" fill="#00357b" r="55"/><path d="m80 207v-110c30.33 0 55 24.67 55 55s-24.67 55-55 55z" fill="#001737"/><path d="m159 308.49c0 36.163-8.06 108.265-8.06 123.51 0 8.28-6.72 15-15 15h-106.53c-16.22 0-29.41-13.14-29.41-29.3v-109.21c0-37.21 30.46-67.49 67.9-67.49h23.2c37.44 0 67.9 30.28 67.9 67.49z" fill="#00357b"/><path d="m159 308.49c0 36.163-8.06 108.265-8.06 123.51 0 8.28-6.72 15-15 15h-55.94v-206h11.1c37.44 0 67.9 30.28 67.9 67.49z" fill="#001737"/><circle cx="256" cy="120" fill="#58b354" r="87"/><path d="m256 207v-174c47.97 0 87 39.03 87 87s-39.03 87-87 87z" fill="#00a963"/><path d="m391 362.02v81.96c0 19.31-15.71 35.02-35.02 35.02h-199.96c-19.31 0-35.02-15.71-35.02-35.02v-81.96c0-66.73 54.29-121.02 121.02-121.02h27.96c66.73 0 121.02 54.29 121.02 121.02z" fill="#58b354"/><path d="m391 362.02v81.96c0 19.31-15.71 35.02-35.02 35.02h-99.98v-238h13.98c66.73 0 121.02 54.29 121.02 121.02z" fill="#00a963"/></g></svg>
                        <span className="number-css">32</span>
                      </Card>
                  </div>
                    <div className="col-3 cen-card" >
                      <Card className="card-dash">
                        <Card.Img variant="top" />
                        <h1 className="mb-0 card-font">Total Orders</h1>
                        <svg id="Capa_1" enableBackground="new 0 0 512.001 512.001" style={{marginLeft:'20px'}} height="250px" viewBox="0 0 512.001 512.001" width="250px" xmlns="http://www.w3.org/2000/svg"><g><path d="m512.001 32v64.001l-192 10.619-192-10.619v-64.001h144l48 10.62 48-10.62z" fill="#bde953"/><path d="m512.001 32v64.001l-192 10.619v-64l48-10.62z" fill="#00cd72"/><path d="m512.001 96.001v319.999h-160l-32 2.66-79 6.581-113-169.241v-159.999z" fill="#00cd72"/><path d="m512.001 96.001v319.999h-160l-32 2.66v-322.659z" fill="#00a88e"/><path d="m368.001 32v149.251l-48-21.25-48 21.25v-149.251z" fill="#fe0"/><path d="m368.001 32v149.251l-48-21.25v-128.001z" fill="#fc0"/><path d="m383.981 447.98v31.98c-16.46.01-39.53.01-63.98.02-59.84.01-128 .02-128 .02l-96-96h-53.73l21.73-128h84.99c41.43 0 75.02 33.58 75.02 75.01l39.61 39.61c6.25 6.24 9.38 14.43 9.38 22.62s-3.13 16.38-9.38 22.63l-.04.04.15.09 16.15 6 26.04-6h46.08c8.83 0 16.82 3.58 22.61 9.37s9.37 13.781 9.37 22.61z" fill="#f5d5ac"/><path d="m383.981 447.98v31.98c-16.46.01-39.53.01-63.98.02v-63.98h32c8.83 0 16.82 3.58 22.61 9.37s9.37 13.781 9.37 22.61z" fill="#ebbd96"/><path d="m305.921 416-21.08 21.08c-11.71 11.71-27.28 18.16-43.84 18.16-16.57 0-32.13-6.45-43.85-18.16l-60.35-60.35 20.79-21.63 60.78 60.77c6.25 6.25 14.44 9.37 22.63 9.37 8.16 0 16.34-3.11 22.58-9.33l.15.09z" fill="#ebbd96"/><path d="m0 416.001h33.875c16.637 0 30.125-13.487 30.125-30.125v-129.876h-64z" fill="#97cbff"/><g fill="#00cd72"><path d="m361.501 271.125h90.25v30h-90.25z"/><path d="m391.564 331.375h60.125v30h-60.125z"/></g></g></svg>
                        <span className="number-css">75</span>
                      </Card>
                  </div>
                    <div className="col-3 cen-card" >
                      <Card className="card-dash">
                        <Card.Img variant="top" />
                        <h1 className="mb-0 card-font">Total Subscribe</h1>
                        <svg id="Layer_1" enableBackground="new 0 0 512 512" style={{marginLeft:'20px'}} height="250px" viewBox="0 0 512 512" width="250px" xmlns="http://www.w3.org/2000/svg"><g><path d="m346.051 158.82-66.45.35-192.58 1.03c-5.55-27.13-6.84-70.28 1.66-96.63 10.35-33.6 45.44-49.5 76.19-57 47.93-11.73 119.53-11.16 139.03 30.45 1.25 3.06 4.07 5.19 7.35 5.55 40.2 3.899 42.9 73.95 34.8 116.25z" fill="#56788b"/><path d="m346.051 158.82-66.45.35v-54.67c-19.72-59.14 31.65-61.93 31.65-61.93 40.2 3.899 42.9 73.95 34.8 116.25z" fill="#415e6f"/><path d="m287.311 340.35c-3.7-.41-7.51-.76-11.43-1.06h-115.76c-150.65 11.37-140.69 110.13-139.91 167.26.04 3.02 2.51 5.45 5.54 5.45h384.5c3.03 0 5.5-2.43 5.54-5.45.76-55.64 10.23-150.78-128.48-166.2z" fill="#ff6b81"/><path d="m275.881 339.29c-1.57 30.6-26.88 54.92-57.88 54.92s-56.32-24.33-57.88-54.92c9.37-.71 19.36-1.08 30.02-1.08h55.72c10.66 0 20.65.37 30.02 1.08z" fill="#d9f0f4"/><path d="m415.791 506.55c-.04 3.02-2.51 5.45-5.54 5.45h-20c3.03 0 5.5-2.43 5.54-5.45.72-52.82 9.29-143.79-108.48-166.2 138.71 15.42 129.24 110.56 128.48 166.2z" fill="#ed2061"/><g fill="#fab684"><path d="m299.451 190.676h27.337c12.616 0 22.844-10.228 22.844-22.846 0-12.617-10.228-22.846-22.844-22.846h-19.448z"/><path d="m135.34 190.676h-27.337c-12.616 0-22.844-10.228-22.844-22.846 0-12.617 10.228-22.846 22.844-22.846h19.448z"/></g><path d="m245.861 306.499c-2.331 6.319-3.534 22.528 0 31.708 0 15.39-12.473 27.866-27.859 27.866s-27.859-12.476-27.859-27.866c3.534-9.181 2.331-25.39 0-31.708z" fill="#fab684"/><path d="m310.961 222.17c0 22.12-18.81 48.54-55.93 78.55-2.08 1.69-4.29 3.23-6.59 4.61-9.18 5.5-19.91 8.44-30.64 8.42-13.42.03-26.43-4.58-36.83-13.03-37.11-30.01-55.92-56.43-55.92-78.55 0-2.35.09-4.7.28-7.01.96-9.65.68-53.71.66-82.16v-.03c-.25-9.64 5.15-18.55 13.82-22.8 18.94-8.42 48.55-12.62 78.19-12.6 21.27-.01 42.52 2.14 59.83 6.48 6.81 1.7 13.02 3.74 18.37 6.12 8.66 4.25 14.06 13.16 13.81 22.8v.03c-.02 28.45-.29 72.51.66 82.16.19 2.31.29 4.66.29 7.01z" fill="#fdd9b4"/><path d="m310.961 222.17c0 22.12-18.81 48.54-55.93 78.55-2.08 1.69-4.29 3.23-6.59 4.61 28.24-25.35 42.52-47.89 42.52-67.16 0-2.35-.1-4.7-.29-7.01-.95-9.65-.68-69.71-.66-98.16v-7.03c.23-9.02-4.48-17.4-12.18-21.92 6.81 1.7 13.02 3.74 18.37 6.12 8.66 4.25 14.06 13.16 13.81 22.8v.03c-.02 28.45-.29 72.51.66 82.16.19 2.31.29 4.66.29 7.01z" fill="#f9c19b"/><g fill="#fab684"><path d="m242.578 236.189c-3.482-2.248-8.123-1.247-10.369 2.233-3.177 4.922-8.563 7.861-14.406 7.861s-11.229-2.939-14.407-7.861c-2.247-3.48-6.89-4.479-10.369-2.233-3.48 2.247-4.479 6.889-2.233 10.369 5.953 9.221 16.049 14.726 27.008 14.726s21.056-5.505 27.009-14.726c2.247-3.48 1.247-8.122-2.233-10.369z"/><path d="m204.322 211.841c3.479 2.245 8.122 1.247 10.369-2.233.731-1.134 1.97-1.811 3.312-1.811s2.581.677 3.312 1.811c1.435 2.222 3.846 3.433 6.308 3.433 1.394 0 2.803-.388 4.061-1.2 3.48-2.247 4.48-6.889 2.233-10.369-3.507-5.432-9.456-8.675-15.915-8.675-6.458 0-12.407 3.243-15.914 8.675-2.246 3.48-1.246 8.122 2.234 10.369z"/></g><path d="m492.191 360.87c0 52.54-42.77 95.29-95.34 95.29-3.38 0-6.72-.18-10-.52-47.89-5.02-85.34-45.61-85.34-94.77s37.45-89.75 85.34-94.77c3.28-.34 6.62-.52 10-.52 52.57 0 95.34 42.75 95.34 95.29z" fill="#09eaa3"/><path d="m492.191 360.87c0 52.54-42.77 95.29-95.34 95.29-3.38 0-6.72-.18-10-.52 47.89-5.02 85.34-45.61 85.34-94.77s-37.45-89.75-85.34-94.77c3.28-.34 6.62-.52 10-.52 52.57 0 95.34 42.75 95.34 95.29z" fill="#14bb87"/><path d="m363.804 368.369h25.546v25.547c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-25.547h25.546c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-25.546v-25.546c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v25.546h-25.546c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" fill="#fff"/><g fill="#ed2061"><path d="m106.238 470.968c-1.403-.041-4.147.323-6.818 2.946-2.943 2.89-6.855 9.205-6.855 30.586 0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-13.057 1.569-17.991 2.248-19.515 2.222-1.268 3.739-3.64 3.788-6.383.075-4.142-3.222-7.56-7.363-7.634z"/><path d="m336.592 473.914c-2.671-2.624-5.419-2.976-6.818-2.946-4.142.075-7.438 3.493-7.363 7.634.049 2.744 1.566 5.116 3.788 6.383.68 1.524 2.248 6.458 2.248 19.515 0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-21.381-3.912-27.696-6.855-30.586z"/></g></g></svg>
                        <span className="number-css">38</span>
                      </Card>
                  </div>
                    <div className="col-3 cen-card" >
                      <Card className="card-dash">
                        <Card.Img variant="top" />
                        <h1 className="mb-0 card-font">Total Product</h1>
                        <svg style={{marginLeft:'20px'}} height="250px"viewBox="0 0 512 512" width="250px" xmlns="http://www.w3.org/2000/svg"><g id="Dairy_Product" data-name="Dairy Product"><g id="Flat"><path d="m208 72h-160v-56a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16z" fill="#e2dbd5"/><path d="m208.167 56h-64.167v456h112.333v-368z" fill="#d4ccc7"/><path d="m144 56h64.167v456h-64.167z" fill="#c6bab3"/><path d="m169.6 128-9.6 16v368h-144a16 16 0 0 1 -16-16v-352a32.956 32.956 0 0 1 28.259-16z" fill="#e2dbd5"/><rect fill="#ffead2" height="80" rx="8" width="112" x="304"/><path d="m408 0h-24a88.011 88.011 0 0 1 -51.3 80h75.3a8 8 0 0 0 8-8v-64a8 8 0 0 0 -8-8z" fill="#faddc3"/><path d="m304 24h112v16h-112z" fill="#f5d3b8"/><path d="m440 512h-160a8 8 0 0 1 -8-8v-304a88.428 88.428 0 0 1 34.54-69.9c16.347-12.506-18.54-24.816-18.54-43.267a22.859 22.859 0 0 1 22.833-22.833h98.334a22.859 22.859 0 0 1 22.833 22.833c0 10.149-11.067 19.4-11.067 19.4-8.859 7.418-15.391 17.806-7.473 23.863a88.428 88.428 0 0 1 34.54 69.904v304a8 8 0 0 1 -8 8z" fill="#f09b73"/><path d="m272 311.394v192.606a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-304a87.086 87.086 0 0 0 -1.051-13.424 208.119 208.119 0 0 1 -174.949 124.818z" fill="#e58b6c"/><path d="m160 144h-160l48-88h160z" fill="#efebe8"/><path d="m280 512c54.5 0 124.472-11.3 157.577-43.217a7.884 7.884 0 0 0 1.889-8.536l-65.54-168.742a8.019 8.019 0 0 0 -9.552-4.806c-22.076 5.918-25.806-22.324-11.487-29.463a7.9 7.9 0 0 0 3.871-9.934l-13.292-34.221a8 8 0 0 0 -7.466-5.081h-56z" fill="#eed60f"/><path d="m280 512a145.412 145.412 0 0 1 -101.577-40.926 8 8 0 0 1 -1.889-8.611l9.784-25.41a8 8 0 0 1 6.984-5.111c11.908-.718 19.9-17.064 10.327-26.922a8 8 0 0 1 -1.726-8.447l25.85-67.138a8.072 8.072 0 0 1 11.771-3.868c19.987 12.755 33.973-25.583 11.316-29.31a8.085 8.085 0 0 1 -6.167-10.769l27.861-72.363a8 8 0 0 1 7.466-5.125 8 8 0 0 1 7.466 5.125l96 249.338a8 8 0 0 1 -1.889 8.611 145.412 145.412 0 0 1 -101.577 40.926z" fill="#f8e868"/><path d="m383.466 462.463-41.412-107.558a200.121 200.121 0 0 1 -163.56 116.236 146.517 146.517 0 0 0 203.083-.067 8 8 0 0 0 1.889-8.611z" fill="#f6e23d"/><circle cx="312" cy="432" fill="#f8e868" r="24"/><circle cx="288" cy="376" fill="#f6e23d" r="24"/><circle cx="248" cy="448" fill="#f8e868" r="24"/><g fill="#eed60f"><path d="m304 448a24 24 0 0 1 30.966-22.966 24 24 0 1 0 -29.932 29.932 23.932 23.932 0 0 1 -1.034-6.966z"/><path d="m280 392a24 24 0 0 1 30.966-22.966 24 24 0 1 0 -29.932 29.932 23.932 23.932 0 0 1 -1.034-6.966z"/><path d="m240 464a24 24 0 0 1 30.966-22.966 24 24 0 1 0 -29.932 29.932 23.932 23.932 0 0 1 -1.034-6.966z"/></g><circle cx="280" cy="280" fill="#fcf5be" r="16"/><circle cx="296" cy="312" fill="#fcf5be" r="8"/><path d="m336.033 328 16 176.724a8 8 0 0 0 7.967 7.276h112a8 8 0 0 0 7.967-7.276l16-176.724z" fill="#81c784"/><circle cx="356" cy="148" fill="#f2bba5" r="20"/><circle cx="388" cy="180" fill="#f2bba5" r="12"/><circle cx="64" cy="96" fill="#fff" r="16"/><circle cx="88" cy="120" fill="#fff" r="8"/><circle cx="376" cy="368" fill="#c8e6c9" r="16"/><circle cx="400" cy="392" fill="#c8e6c9" r="8"/><path d="m0 496a16 16 0 0 0 16 16h144v-80c-27.6 63.156-160 64-160 64z" fill="#d4ccc7"/><path d="m0 208h160v224h-160z" fill="#ea6049"/><path d="m0 372.288v59.712h160v-190.308a216.326 216.326 0 0 1 -160 130.596z" fill="#de513e"/><path d="m32 336c0-23.491 40-80 48-80s48 55.383 48 80c0 57.418-96 65.9-96 0z" fill="#fff"/><path d="m36.09 357.189c18.31 41.838 91.91 29.085 91.91-21.189 0-5.617-2.087-12.839-5.4-20.636-13.267 32.691-51.368 52.063-86.51 41.825z" fill="#efebe8"/><path d="m504 336h-176a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" fill="#49ad4d"/><path d="m348 460.142 4.036 44.582a8 8 0 0 0 7.964 7.276h112a8 8 0 0 0 7.967-7.276l12.354-136.453a172 172 0 0 1 -144.321 91.871z" fill="#66bb6a"/></g></g></svg>
                        <span className="number-css">132</span>
                      </Card>
                  </div>
                </div>
                <LineChat />
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Dashboard
