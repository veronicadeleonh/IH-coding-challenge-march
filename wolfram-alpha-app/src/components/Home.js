import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
    return (
        <div>
            <Link to="/sun-path">
            <Button variant="warning">Sun path</Button> 
            </Link>
            {" "}
            <Link to="moon-path">
            <Button variant="dark">Moon Path</Button>
            </Link>
        </div>
    )
}
