import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Home = ({ addCityHandler }) => {
    return (
        <div>
                <Link to="/sunpath">
                    <Button variant="warning">Sun</Button> 
                </Link>
                {" "}
                <Link to="/moonpath">
                    <Button variant="dark">Moon</Button>
                </Link>
                {" "}
            <hr />
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Add another city</Form.Label>
                    <Form.Control type="text" placeholder="Example: Munich" />
                    <Form.Text className="text-muted">
                        Type a city you like and add to the Moon and Sun path lists.
                    </Form.Text>
                </Form.Group>
                    <Button variant="success" onClick={addCityHandler}>Add</Button>
                </Form>
        </div>
    )
}

export default Home