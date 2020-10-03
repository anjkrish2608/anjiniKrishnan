import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
function NoMatch() {
  return (
    <Container>
      <Row>
        <Cols size="md-12">
          
            <h1>404 Page Not Found
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          
        </Cols>
      </Row>
    </Container>
  );
};

export default NoMatch;
