import React from "react";
import LazyLoad from "react-lazyload";
import Sdata from "./Sdata";

const Loading = () => (
  <div className="post loading">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const Post = ({ imgsrc, id, title, price }) => (
  <div className="post">
    <LazyLoad once={true} placeholder={<img src={imgsrc} alt="..." />}>
      <div className="post-body">
        <img src={imgsrc} />
        <h4>{title}</h4>
        <h6>{price}</h6>
      </div>
    </LazyLoad>
    <h4>{title}</h4>
    <p>{price}</p>
  </div>
);
const ProdLoad = () => (
  <div className="loading">
    <h2>LazyLoad Demo</h2>
    <div className="post-container">
      {Sdata.map((post) => (
        <LazyLoad
          key={post.id}
          height={100}
          offset={[-100, 100]}
          placeholder={<Loading />}
        >
          <Post key={post.id} {...post} />
        </LazyLoad>
      ))}
    </div>
  </div>
);

export default ProdLoad;
