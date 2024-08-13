import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        console.log(props)
        super(props)
    }

    render() {
        console.log(Component)
        return (
            <div className='card'>
                <div className='title'>{this.props.title}</div>
                <div className='content'>
                    <p>{this.props.text}</p>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}
