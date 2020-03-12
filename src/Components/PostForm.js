import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

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
        // response may take up to 30 seconds, have patience
        e.preventDefault();

        const post= {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
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

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm);
