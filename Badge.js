import React from "react"



class Badge extends React.Component {

    render(props) {
        console.log("hi")
        return (
            <div>
                <h2 name="firstName">{this.props.firstName}</h2>
                <h2 name="lastName" >{this.props.lastName}</h2>
                <h2 name="email" >{this.props.email}</h2>
                <h2 name="placeOfBirth" >{this.props.placeOfBirth}</h2>
                <h2 name="phone" >{this.props.phone}</h2>
                <h2 name="favoriteFood" >{this.props.favoriteFood}</h2>
                <h2 name="about" >{this.props.about}</h2>
            </div>
        )
    }

}




export default Badge
