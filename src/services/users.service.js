import {urls} from "../configs/urls";


const getAllUsers = ()=>fetch(urls.users)
        .then(value => value.json())


export const apiService  = {
    getAllUsers
}