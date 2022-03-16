import React, {useEffect, useState} from 'react';
import {apiServices} from "../../services/ships.services";
import "./ships.css"


const Ships = () => {
    const [ships, setShips] = useState([])

    useEffect(() => {
        apiServices.getShips()
            .then(ship => setShips(ship))
    })

    return (
        <div>
            {ships.map(ship => <div className='main' key={ships.id}>
                <div className='info_ships'>
                    <div><h1>{ship.mission_name}</h1></div>
                    <div><p>{ship.launch_year}</p></div>
                </div>
                <div className='div_image'><img className='img_ships' src={ship.links.mission_patch_small} alt=" "/></div>
            </div>)}
        </div>
    );
};

export default Ships;