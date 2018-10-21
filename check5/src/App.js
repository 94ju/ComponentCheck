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
  componentWillMount(){
    console.log('This is from component will  mount 1');
    this.fetchData();
    console.log('This is from component will  mount 2');
    this.fetchnumberOfCommits();
    console.log('This is from component will mount 3');
    
  }
  fetchData(){
    console.log('This is repo checking');
    // this.setState({
    //   repositories: [],
    //   check:true  
    // })
    fetch('https://api.github.com/user/repos?access_token=3d28b3115f09fa371c1ba7d0995c3c9311db253a').
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
  fetchnumberOfCommits(){
    
    let {check,repositories}=this.state
    // console.log(check);
    // console.log(repositories)
    // if(check){
    //   console.log('true');
    // console.log(this.state.repositories[1].name);}
    console.log(this.state);
    console.log( this.state.repositories);
    fetch('https://api.github.com/repos/94ju/GitFetch/commits?access_token=3d28b3115f09fa371c1ba7d0995c3c9311db253a').
    then(results => results.json()).
    then(results => results.map(user =>({
      name :user.commit.message
      // createdDay :user.created_at  
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
    // {this.fetchnumberOfCommits()}
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
     
   
    // let array=[];
    // if (checking) {
    //    for (var i=0; i < Object.keys(person).length; i++) {
    //      {array.push(<Apii react={this.state.person[i].name} url={this.state.person[i].url} />) }
    //    }  
    // }

    return (
      <div>
        {array}
        {/* <p><button class="w3-button w3-deep-orange" onClick={this.componentDidMount()} >Fetch Data</button></p> */}
        {/* <button onClick={this.fetchData}>Fetch Data</button> */}
      </div>
    );
  }
}

export default App;
