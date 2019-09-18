import React from 'react';
import { Button, Link } from '@material-ui/core';

function Home(props) {

    function handleClick(){
        console.log(props);
        props.history.push("/week");
    }

    return <div>
        <h1>salu2</h1>
        <Button onClick={handleClick} variant="contained" color="primary">
            Get weather info
        </Button>

    </div>
}

export default Home;