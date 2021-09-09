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
            about: "",
            nextBadge: []
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit() {
        this.setState(prevState => {
            return {
                nextBadge: [...prevState.nextBadge, prevState],
                firstName: "",
                lastName: '',
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                about: ""

            }
        })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {

        return (

            <div>
                <form className="info" onSubmit={this.handleSubmit}>
                    <h1 className="head">Name Badge</h1>
                    <input onChange={this.handleChange} className="text" name="firstName" placeholder="First Name" type="text" min="3"></input>
                    <input onChange={this.handleChange} className="text" name="lastName" placeholder="Last Name" type="text" min="3"></input>

                    <input onChange={this.handleChange} className="text" name="email" placeholder="E-Mail" type="email" min="3"></input>

                    <input onChange={this.handleChange} className="text" name="placeOfBirth" placeholder="Birthplace" type="text" min="3"></input>

                    <input onChange={this.handleChange} className="tel" name="phone" placeholder="Phone Number" type="tel" min="3"></input>

                    <input onChange={this.handleChange} className="text" name="favoriteFood" placeholder="Favorite Food" type="text" min="3"></input>

                    <input onChange={this.handleChange} id="tellUs" name="about" placeholder="Tell Us About Yourself" type="text" min="3" ></input>

                    <button>Submit</button>
                    <Badge />
                </form>
            </div>

        )
    }

}

export default App
