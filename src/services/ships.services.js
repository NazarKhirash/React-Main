import {urls} from "../configs/urls";

const getShips = () => {
    return fetch(urls.ships)
        .then(value => value.json())
}

export const apiServices = {
    getShips
}