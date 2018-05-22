import React, { Component } from 'react';
import Comments from './Comments.js'

class ArticlesLinksDiv extends Component {

    constructor() {
        super()

        this.state = {
            displayComment: false,
            commentText: 'Add Comment',
        }
    }

    displayComment(){
        let displayComment = this.state.displayComment
        let commentText = this.state.commentText

        if (commentText === 'Add Comment'){
            commentText = 'Submit Comment'
        }
        else {
            commentText = 'Add Comment'
        }

        this.setState({
            displayComment: !(displayComment),
            commentText: commentText,
        })
    }

    render() {
        return(
	<div className="article-links">
                <a className="article-link" onClick={() => this.displayComment()}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">{this.state.commentText}</span>
                </a>
                
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                <Comments display={this.state.displayComment} />
                </div>
        )
    }
}

export default ArticlesLinksDiv;