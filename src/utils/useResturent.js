import { useState, useEffect } from "react";

const useResturant = (id) => {
    const [resturant, setResturent] = useState(id)

    useEffect(() => {
        getResturentINfo();
    }, [])

    async function getResturentINfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.179589&lng=72.63474599999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();
        setResturent(json.data.cards[0].card.card.info);
    }
    return resturant;
}

export default useResturant;