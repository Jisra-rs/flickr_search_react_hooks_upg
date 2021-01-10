import React from "react";

const Picture = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);

export default Picture;
