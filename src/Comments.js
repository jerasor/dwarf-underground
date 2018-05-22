import React, { Component } from 'react';

class Comments extends Component {

    render() {

        const inputText = this.props.display ? (
            <input type='text' />
        ) : (
            <div></div>
        );

        return(
		    <div>
                {inputText}
            </div>
        )
    }
}

export default Comments;