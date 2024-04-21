import React from "react";

// function Greet(props){
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             <p>{props.children}</p>
//         </div>
//     )

// }

const Greet = props => {
    const { name, heroName } = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet;