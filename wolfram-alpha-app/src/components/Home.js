import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Home = ( cities, setCities ) => {

    const [inputQuery, setInputQuery] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("event", event)
    };
    
    const handleChange = (event) => {

        setInputQuery(event.target.value);

        console.log("input", inputQuery)
        // setCities(cities.push(value)) 
        // console.log("cities", cities)
      };

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
                        onChange={handleChange} 
                        placeholder="Example: Munich" />

                    <Form.Text className="text-muted">
                        Type a city you like and add to the Moon and Sun path lists.
                    </Form.Text>

                </Form.Group>

                    <Button 
                        variant="success" 
                    //    onClick={addCityHandler}
                        >
                        Add
                    </Button>
                </Form>
        </div>
    )
}

export default Home