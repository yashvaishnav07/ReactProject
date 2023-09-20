export function filterData(searchText, allRestraunts){
    return allRestraunts.filter((restraunt) => {
        return restraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
}