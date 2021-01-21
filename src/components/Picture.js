import React from "react";

const Picture = ({ url, alt, id, handleOpenModal }) => (
  <li>
    <img src={ url } alt={ alt } key={ id } onClick={ handleOpenModal } data-id={ id }/>
  </li>
);

export default Picture;
