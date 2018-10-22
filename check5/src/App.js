import React, { Component } from 'react';
import Api from './APIcalling/apicalling';

class App extends Component {
  
  constructor(){
    console.log('This is from constructor');
     super();
     this.state={
        check:true,
        repositories:[],
        commits: []
     } 
  }
  componentDidMount(){
    console.log('This is from component will  mount 1');
    this.fetchData();
    console.log('This is from component will  mount 2');
    this.fetchnumberOfCommits();
    console.log('This is from component will mount 3');
    
  }
  fetchData = async()=>{
    console.log('This is repo checking');
     fetch('https://api.github.com/user/repos?access_token=405e9de7b11c68f0a4e8d2c347b9e3ab2cae7cd1').
    then(results => results.json()).
    then(results => results.map(user =>({
      name :user.name,
      createdDay :user.created_at})  
    )).
    then(repositories =>this.setState({ 
      repositories,
      check:true
      
    }))
    console.log( this.state.repositories);
    console.log(this.state);
   
  }
  fetchnumberOfCommits= async()=>{
    
    let {check,repositories}=this.state
    console.log(this.state);
    console.log( this.state.repositories);
    fetch('https://api.github.com/repos/94ju/GitFetch/commits?access_token=405e9de7b11c68f0a4e8d2c347b9e3ab2cae7cd1').
    then(results => results.json()).
    then(results => results.map(user =>({
      name :user.commit.message 
    })
    )).
    then(commits =>this.setState({ 
      commits
      
    }))
    console.log('This is commit checking');
    console.log(this.state);
  }
  render() {
    let {check,repositories,commits}=this.state
    console.log('This is from render');
    console.log(this.state);
    console.log(this.state.commits);
    console.log(this.state.repositories);
    let array=[];
    console.log(check);
    if(check){
      for(let i=0; i< Object.keys(repositories).length;i++){
        
        {array.push(  <Api
        repo={this.state.repositories[i].name}
        createdDay={this.state.repositories[i].createdDay}

      />)}
    }  
    }
    return (
      <div>
        {array}
      </div>
    );
  }
}

export default App;
