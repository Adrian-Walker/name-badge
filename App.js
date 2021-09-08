import React from "react"
import { Component } from "react/cjs/react.production.min";
import Badge from "./Badge";

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: '',
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            about: ""
        }
    }

    render() {
        const newBadges = this.setState.

            return(
                <div>
                    <form>
                        <h1 className="head">Name Badge</h1>
                        <Badge />
                        <button>Submit</button>
                    </form>
                </div>
            )
    }

}

export default App
