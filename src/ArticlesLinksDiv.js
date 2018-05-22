import React, { Component } from 'react';
import Comments from './Comments.js'

class ArticlesLinksDiv extends Component {

    constructor() {
        super()

        this.state = {
            displayComment: false,
            commentText: 'Add Comment',
            comments: [],
        }
    }

    displayComment(){
        let displayComment = this.state.displayComment
        let commentText = this.state.commentText
        let comments = [...this.state.comments]

        if (commentText === 'Add Comment'){
            commentText = 'Submit Comment'
        }
        else {
            commentText = 'Add Comment'
            comments.push(document.querySelector('#commentInput').value)
        }

        this.setState({
            displayComment: !(displayComment),
            commentText: commentText,
            comments: comments,
        })
        
    }

    saveOnEnter(ev) {
        if (ev.key === 'Enter') {
          this.displayComment()
        }
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
                <Comments onkey={this.saveOnEnter.bind(this)} display={this.state.displayComment} comments={this.state.comments} />
            </div>
        )
    }
}

export default ArticlesLinksDiv;