import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../Config"
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturent";

const RestrauntMenu = () => {

    const {id} = useParams()

    const resturent = useResturant(id)

    return (!resturent) ? <Shimmer/> : (
        <div>
            <h1>Restraunt Menu: {resturent.id}</h1>
            <h2>{resturent.name}</h2>
            <img src={IMG_CDN_URL + resturent.cloudinaryImageId}></img>
            <h2>{resturent.city}</h2>
            <h2>{resturent.areaName}</h2>
            <h2>{resturent.avgRating} Stars</h2>
            <h2>{resturent.locality}</h2>
        </div>
    )
}

export default RestrauntMenu;