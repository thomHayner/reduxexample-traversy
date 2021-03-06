import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        // expect response === {title: "test", body: "test", id: 101}
        // response will take about 20 seconds / up to 30 seconds, have patience
        e.preventDefault();

        const post= {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>ADD POST</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleChange} 
                            
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea 
                            name="body" 
                            value={this.state.body} 
                            onChange={this.handleChange} 
                            
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm