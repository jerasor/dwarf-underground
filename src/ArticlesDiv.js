import React, { Component } from 'react';
import AvatarDiv from './AvatarDiv.js'
import Section from './Section.js'
import ArticlesLinksDiv from './ArticlesLinksDiv.js'

class ArticlesDiv extends Component {
    render() {
        return(
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <AvatarDiv />
                <Section />
                <ArticlesLinksDiv />
            </div>
        )
    }
}

export default ArticlesDiv;