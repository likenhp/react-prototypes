import React from 'react';
import ReactDOM from 'react-dom';

const userOne = {
    name: "David",
    luckynumber: luckynumber()
}

function luckynumber(){
    return (Math.floor(Math.random()*1000)+1);
}

function greeting(user){
    debugger;
    return(<div className="container">
        <h1>Welcome {user.name}</h1>
        <h2 className="text-muted">Your Lucky Number is {user.luckynumber}</h2>
    </div>)
}

ReactDOM.render(
    <h1 className="container">{greeting(userOne)}</h1>,
    document.getElementById('root')
);
