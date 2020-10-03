import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import displayPic from "./assets/profilepic.jpg";
import FontAwesome from 'react-fontawesome'

function Home() {


    return (

        <Container>
            <Row>
                <Cols size="col-lg-2 d-xs-none">

                </Cols>
                <Cols size="col-lg-6 main">
                    <h1>About Me</h1>
                        <p>
                        Back-end Developer studying a Bachelor of Mathematics and Computer Science at the University of
                        Adelaide. Awarded the Specialist Mathematics Subject Prize in Year 12. Current position at the Joint
                        Replacement Clinic responsible for Clinical Data Entry and Management. Looking for a position which
                        will accommodate the completion of my degree. I love logical coding, collaborating with others and
                        being able to problem solve. I am organised, have great interpersonal skills and love to learn.
                        </p>
                        <a href="mailto:anjini.krishnan@hotmail.com"><FontAwesome className="far fa-envelope"></FontAwesome> anjini.krishnan@hotmail.com</a>
                        <a href="https://www.linkedin.com/in/anjini-krishnan" target="_blank" rel="noopener noreferrer"><FontAwesome className="fab fa-linkedin whiteThis"></FontAwesome> </a>
                            <br />
                        <a href="https://github.com/anjkrish2608" target="_blank" rel="noopener noreferrer"><FontAwesome className="fab fa-github"></FontAwesome> Github</a>
                            <br />
                        <a href="./assets/public_resume.pdf" target="_blank" rel="noopener noreferrer"><FontAwesome className="far fa-file"></FontAwesome> Cirriculum Vitae</a>
                </Cols>
                <Cols size="col-lg-3 main">
                    <img src={displayPic} alt="Anjini Krishnan" className="img-fluid" />
                </Cols>
            </Row>
            <Row>
                <Cols size="col-lg-2 d-xs-none">

                </Cols>
                <Cols size="col-lg-3 main">
                <h4>Technologies</h4>
                <p>
                    ReactJS and Handlebars.js
                    <br />
                    MongoDB and MySQL
                    <br />
                    Express and Node js
                    <br />
                    Firebase and Bootstrap
                </p>
                </Cols>
                <Cols size="col-lg-3 main">
                <h4>Areas of Interest</h4>
                <p>
                    
                    Back-End Development
                    <br />
                    Data Analytics
                    <br />
                    Artificial Intelligence
                    <br />
                    Statistics
                </p>
                </Cols>
            </Row>
        </Container>
    )
}

export default Home;