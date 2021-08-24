import React from "react"
import { Component } from "react/cjs/react.production.min";

class Badge extends Component() {
    constructor() {
        super()
        this.state = []
    }


    render() {
        return (
            <div>
                <input name="firstName"></input>
                <input name="lastName"></input>
                <input name="email"></input>
                <input name="placeOfBirth"></input>
                <input name="phone"></input>
                <input name="favoriteFood"></input>
                <input name="about"></input>
            </div>
        )
    }

}



export default Badge
