import React, {useState, useEffect} from 'react';
import { restrauntList } from "../Config";
import { RestrauntCard } from "./ResturentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import {filterData} from "../utils/helper"

const Body = () => {

    const [filteredRestraunts, setfilteredRestraunts] = useState([])
    const [allRestraunts, setallRestrauntss] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        getRestrunts(restrauntList)
    }, [])

    async function getRestrunts(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.179589&lng=72.63474599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setallRestrauntss(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setfilteredRestraunts(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    if (!allRestraunts) return null;

    return (allRestraunts.length === 0) ? <Shimmer/> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchText, allRestraunts);
                    setfilteredRestraunts(data);
                }}>Search</button>
            </div>
            
            <div className="restraunt-list">
                {
                filteredRestraunts.map((restraunt) => {
                    return <Link to={`/resturents/${restraunt.info.id}`}><RestrauntCard {...restraunt.info} key={restraunt.info.id}/></Link>
                })}
            </div>
        </>
    )
}

export default Body;