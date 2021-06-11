import {Link} from '@reach/router'
import PiratesList from '../components/PiratesList'


import { useState,useEffect } from 'react';
import axios from 'axios'

const Home=()=>{
    const [ pirates, setPirates ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
        .then((res) => {
            setPirates(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []);

    const style={
        display: "flex",
        justifyContent: "space-evenly",
        width: 640,
        border: "black thin solid",
        backgroundColor: "darkcyan"
    }
    return(
        <div>
            <div style={style}>
                <h1>Pirates Crew</h1>
                <Link style={{paddingTop: 10}} to="/api/new"><button class="btn btn-success" >Add Pirate</button></Link>
            </div>
            
            <PiratesList  pirates={pirates} setPirates={setPirates}/>
        </div>
    )
}

export default Home;