import axios from 'axios'
import React, { Component } from 'react'

 class Task04Part2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        userId: '',
        title: '',
        body:''
      }
    }

    handleSubmit= (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

  render() {
    const {userId, title, body} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>userID</label>
                <input type="text" name="userId" value={userId} onChange={this.handleChanges} />
            </div>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.handleChanges} />
            </div>
            <div>
                <label>Body</label>
                <input type="text" name="body" value={body} onChange={this.handleChanges} />
            </div>
            <button type="submit">Add Post</button>
        </form>
    )
  }
}

export default Task04Part2;