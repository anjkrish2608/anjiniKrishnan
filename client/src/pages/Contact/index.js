import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import ContactForm from "../../components/ContactForm";

function Contact(){


    return(

        <Container fluid="0">
            <Row>
                <Cols size="col-lg-2 d-xs-none">
                </Cols>
                <Cols size="col-lg-9 main">
                <h1>Contact Me</h1>
                <ContactForm />
                </Cols>
            </Row>
        </Container>

    )
}

export default Contact;

