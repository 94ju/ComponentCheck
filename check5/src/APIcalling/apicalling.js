import React,{Component} from 'react'


const Api = (props) =>{
    return(
    <div>
        <p>The repository name is <b>{props.repo} </b>and created date is <b>{props.createdDay}</b></p>
    </div>
)}

export default Api;