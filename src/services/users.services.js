import {urls} from "../configs/urls";

const fetchData = (data) => fetch(data).then(value => value.json())


const getUsers = () => fetchData(urls.users)
const getPosts = () => fetchData(urls.posts)
const getComments = () => fetchData(urls.comments)


export const apiService = {
    getUsers,
    getPosts,
    getComments
}
