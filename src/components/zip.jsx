import React, { useEffect, useState } from "react";


const Zip = (props) => {
    const distance = Number(props.distanceState)
    return <h1> {distance.toFixed(2)} miles </h1>
    

}

export default Zip