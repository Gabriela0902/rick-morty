import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';


export const imageComponent = ({ className, src, alt }) => (
    <img className={className} alt={alt} src={src}  />
);