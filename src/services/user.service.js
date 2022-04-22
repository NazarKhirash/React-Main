import axiosService from "./axios.service";
import {urls} from "../configs/urls";


export const apiService = {
    getAllUsers: () => axiosService.get(urls.users).then(value => value.data),
    getAllPosts: () => axiosService.get(urls.posts).then(value => value.data),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommentsId: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data),
    getUsersPostsId: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getPhotosById: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}