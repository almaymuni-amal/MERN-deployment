import React from 'react'
import axios from 'axios';


const DeleteButton =props => {
    const { pirateId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/pirates/'+ pirateId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button class="btn btn-danger" onClick={deleteAuthor}>
            Walk the plank
        </button>
    )
}

export default DeleteButton