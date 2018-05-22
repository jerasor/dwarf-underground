import React, { Component } from 'react';

class Comments extends Component {

    render() {

        const inputText = this.props.display ? (
            <input id='commentInput' type='text' />
        ) : (
            <div></div>
        );

        return(
		    <div>
                {inputText}
                <ul>
                    {this.props.comments.map(comment => <li>{comment}</li>)}
                </ul>
            </div>
        )
    }
}

export default Comments;