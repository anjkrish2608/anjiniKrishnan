import React, { useEffect } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import API from "../../utils/API"
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";

function Output(props) {
    const [state, dispatch] = useStoreContext();
    var id=props.value;
    useEffect(() => {
        dispatch({ type: LOADING });
        API.getSpecific(id)
            .then(results => {
                dispatch({
                    type: UPDATE_POSTS,
                    projects: results.data
                });
            })
            .catch(err => console.log(err));
    }, [dispatch, id]);

    return(
        <div>
                    {state.projects.length ? (
                        <div>
                        <h2>{state.projects.name}</h2>
                        <p>{state.projects.description}</p>
                        <ul>
                        {state.projects.tech.map(item=>{
                            return(<li>{item}</li>)
                        })}
                        </ul>
                        <a href={state.projects.gitHubLink} target="_blank" rel="noopener noreferrer">View Github Repository Here</a>
                        <a href={state.projects.deployLink} target="_blank" rel="noopener noreferrer">View Deployed Link Here</a>
                        </div>
                        
                    ) :( <div> </div>)}
                </div>
    )
}

export default Output;