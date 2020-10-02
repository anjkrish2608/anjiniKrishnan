import React from "react";
import Container from "../../components/Container";

function Output(){

    return(
        <Container>
            <h2>{name}</h2>
            <p>{description}</p>
            <ul>
            {description.map(item=>{
                <li>{item}</li>
            })}
            </ul>
            <a href={gitHubLink}>View Github Repository Here</a>
            <a href={deployLink}>View Deployed Link Here</a>
        </Container>
    )
}

export default Output;