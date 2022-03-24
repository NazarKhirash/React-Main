import urls from "../configs/urls";

const fetchData = (url)=>fetch(url).then(value => value.json())

const getUsers = ()=>fetchData(urls.users)

export const apiService = {
    getUsers
}