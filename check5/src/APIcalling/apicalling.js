import React,{Component} from 'react'



// class Api extends Component{
    // constructor(props){
    //     console.log('This is from Api constructor');
    //     super(props);
    // }
    // redner(){
const Api = (props) =>{
    return(
    <div>
        <p>The repository name is <b>{props.repo} </b>and number of commits are <b>{props.createdDay}</b></p>
    </div>
)}
        
    


export default Api;