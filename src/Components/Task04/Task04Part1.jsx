import React, { Component } from 'react'
import axios from 'axios';
import Task04Part2 from './Task04Part2';

class Task04Part1 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        console.log(response.data)
        this.setState({ posts: response.data})
      } 
    )
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) =>(
          <div key={post.id}>
            {post.title}
          </div>
          ))}
      </div>
    )
  }
}

export default Task04Part1;