import {urls} from "../configs/urls";

const fetchData = (url)=>fetch(url).then(value => value.json())

const getUsers = ()=>fetchData(urls.users)
const getPostId = (userId)=>fetchData(`${urls.posts}?userId=${userId}`)
const getUser = (id)=>fetchData(`${urls.users}/${id}`)

export const apiService = {
    getUsers,
    getPostId,
    getUser
}