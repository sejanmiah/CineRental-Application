import React from 'react';
import Star from "../assets/star.svg"

const Rateing = ({value}) => {
    const stars = Array(value).fill(Star)
    return (
        <>
            {
                stars.map((star,index) => (
                    <img key={index} width="14" alt='star' height="14"  src={star}  />
                ))
            }
        </>
    );
};

export default Rateing;