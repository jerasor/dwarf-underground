import React, { Component } from 'react';
import ArticlesDiv from './ArticlesDiv.js'
import Aside from './Aside.js'
import OtherArticlesDiv from './OtherArticlesDiv.js'

class Main extends Component {
    render() {
        return(
            <main className="expanded row">
                <ArticlesDiv />
                <Aside />

                <OtherArticlesDiv />
            </main>
        )
    }
}

export default Main;

