import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';

export default class Home extends Component  {

// state = {
//     cities: ["Caracas", "Toronto", "Serrekunda", "Lima"]
// }

// getMoonPath = () => {
//     axios
//     .get(`http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=moon&output=json&location=${cities}`)
// }

    render() {
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
                <Link to="/addcity">
                <Button variant="success">Add</Button>
                </Link>
                </Form>
                
            </div>
        )

    }

}
