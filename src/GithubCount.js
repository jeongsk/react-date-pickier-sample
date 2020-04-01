import React from "react";

import { Package, Forked, Star, Databsase } from "./icons";

const Count = ({ label, value }) => (
  <div className="btn-with-count-wrapper">
    <div className="btn-with-count">{label}</div>
    <div className="social-count">{value}</div>
  </div>
);

export default ({ useby, star, fork, size }) => {
  return (
    <div style={{ display: "flex" }}>
      <Count
        label={
          <span>
            <Package /> Used By:
          </span>
        }
        value={useby}
      />
      <Count
        label={
          <span>
            <Star /> Star:
          </span>
        }
        value={star}
      />
      <Count
        label={
          <span>
            <Forked /> Fork:
          </span>
        }
        value={fork}
      />
      <Count
        label={
          <span>
            <Databsase /> Size:
          </span>
        }
        value={size}
      />
    </div>
  );
};
