import React from "react"



function Badge() {
    return (
        <div class="info">
                <input class="text" name="firstName" placeholder="First Name" type="text" min="3"></input>
                <input class="text" name="lastName" placeholder="Last Name" type="text" min="3"></input>

                <input class="text" name="email" placeholder="E-Mail" type="email" min="3"></input>

                <input class="text" name="placeOfBirth" placeholder="Birthplace" type="text" min="3"></input>

                <input class="tel" name="phone" placeholder="Phone Number" type="tel" min="3"></input>

                <input class="text" name="favoriteFood" placeholder="Favorite Food" type="text" min="3"></input>

                <input id="tellUs" name="about" placeholder="Tell Us About Yourself" type="text" min="3" ></input>

        </div>
    )
}





export default Badge
