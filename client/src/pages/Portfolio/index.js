import React, { useEffect } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Card from "../../components/Card";
import API from "../../utils/API"
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";

function Portfolio() {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        dispatch({ type: LOADING });
        API.getProjects()
            .then(results => {
                dispatch({
                    type: UPDATE_POSTS,
                    projects: results.data
                });
            })
            .catch(err => console.log(err));
    }, [dispatch]);

    return (
        <Container fluid="0">
            <Row>
                <Col size="col-lg-2 d-xs-none">
                </Col>
                <Col size="col-lg-3 main">
                    <h1>Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col size="col-lg-2 d-xs-none">
                </Col>
                {state.projects.length ? (
                    <Col size="col-lg-3 main">
                        {state.projects.map((item) => <Card image={item.image} name={item.name} index={item.index}/>)}
                    </Col>
                ) : (
                        <div>loading....</div>
                    )}

            </Row>
            <Row>
            <Col size="col-lg-2 d-xs-none">
                </Col>
                    <Col size="col-lg-3 main"></Col>
            </Row>
        </Container>

    );
};

export default Portfolio;

 /* <Card 
            image={projects.actorAddict.image} 
            name={projects.actorAddict.name}
        />
        <Card 
            image={projects.binOut.image} 
            name={Projects.binOut.name}
        />
        <Card 
            image={Projects.employeeTracker.image} 
            name={Projects.employeeTracker.name}
        />
                </Col>
                </Row>
                <Row>
                <Col size="col-lg-2 d-xs-none">
                </Col>
                <Col size="col-lg-3 main">
                <Card 
            image={Projects.employeeSummary.image} 
            name={Projects.employeeSummary.name}
        />
        <Card 
            image={Projects.eatBurgers.image} 
            name={Projects.eatBurgers.name}
        />
        <Card 
            image={Projects.readMeGenerator.image} 
            name={Projects.readMeGenerator.name}
        /> */