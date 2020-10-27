import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Home = ({ cities, setCities, fetchMoonData, fetchSunData }) => {

    const [inputQuery, setInputQuery] = useState("")

    const handleSubmit = (event) => { event.preventDefault() }; 
    
    const changeHandler = (event) => {
        // console.log("value", event.target.value)
        setInputQuery(event.target.value);
        console.log("input", inputQuery)  
    };

    const addCityHandler = (event) => {
        setCities(cities => [...cities, inputQuery]) 
        // console.log("cities", cities)
        fetchMoonData(inputQuery);
        fetchSunData(inputQuery)  
    }
      console.log("cities", cities)
     // console.log("inputQuery", inputQuery)
      
    return (
        <div>
                <Link to="/sunpath"><Button variant="warning">Sun</Button></Link>
                {" "}
                <Link to="/moonpath"><Button variant="dark">Moon</Button></Link>
                {" "}

            <hr />
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="add">Add another city</Form.Label>

                    <Form.Control 
                        type="text"
                        id="add"
                        name="add"
                        value={inputQuery}
                        onChange={changeHandler}
                        placeholder="Example: Munich" />

                    <Form.Text className="text-muted">
                        Type a city you like and add to the Moon and Sun path lists.
                    </Form.Text>

                </Form.Group>

                    <Button 
                        variant="success" 
                        onClick={addCityHandler}
                        >
                        Add
                    </Button>
                </Form>
        </div>
    )
}

export default Home