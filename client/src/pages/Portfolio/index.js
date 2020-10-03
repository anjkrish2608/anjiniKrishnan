import React, { Route, useEffect } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import Card from "../../components/Card";
import API from "../../utils/API"
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";
import Output from "../Output";

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
                <Cols size="col-lg-2 d-xs-none">
                </Cols>
                <Cols size="col-lg-3 main" >
                    <h1>Portfolio</h1>
                </Cols>
            </Row>
            <Row>
                {state.projects.length ? (
                    state.projects.map((item) => { 
                        return (<Cols size="col-lg-3 main"><Card image={item.image} name={item.name} index={item.index} /></Cols>) 
                    })
                ) : (
                        <div>loading....</div>
                    )}
            </Row>
            <Row>
                <Cols size="col-lg-2 d-xs-none">
                </Cols>
                <Cols size="col-lg-6 main">
                
                </Cols>
            </Row>
        </Container>

    );
};

export default Portfolio;