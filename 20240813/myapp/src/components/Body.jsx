import React, { Component } from 'react'
import Card from './card/Card'

export default class Body extends Component {
    render() {
        return (
            <div id='body'>
                <Card text={"123"} title={"첫번째 카드"}>
                    <div>나는 자식이야</div>
                </Card>
                <Card text={"456"} title={"두번째 카드"}>
                    <div>나는 자식이야</div>
                </Card>
            </div>
        )
    }
}
