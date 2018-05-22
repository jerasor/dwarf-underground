import React, { Component } from 'react';

class Head extends Component {
    render() {
        return(
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <title>Dwarf Underground</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css" integrity="sha256-itWEYdFWzZPBG78bJOOiQIn06QCgN/F0wMDcC4nOhxY=" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700,900" rel="stylesheet"/>
                <link rel="stylesheet" href="static.css"/>
                <script src="https://use.fontawesome.com/149c865a8c.js"></script>
            </head>
        )
    }
}

export default Head;