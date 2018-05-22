import React, { Component } from 'react';

class Comments extends Component {

    render() {

        const inputText = this.props.display ? (
            <input autoFocus onKeyPress={this.props.onkey} className='comment' id='commentInput' type='text' />
        ) : (
            <div></div>
        );

        return(
		    <div>
                {inputText}
                <ul>
                    {this.props.comments.map(comment => <li className='comment'>{comment}</li>)}
                </ul>
            </div>
        )
    }
}

export default Comments;