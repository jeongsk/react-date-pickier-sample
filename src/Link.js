import React from "react";

const Link = ({ link }) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    {link}
  </a>
);

export default Link;
