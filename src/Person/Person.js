import React from 'react';

const person = (props) => {
    return (
        <div className="personCard">
            <p>My birth day is on the {props.day} day of the month</p>
            <p>My name is {props.name}</p>
            <p>My age is {props.age}</p>
            {/*children refers to the html in between the tags, empty tag if no info passed in tags*/}
            <p>My hobbies are: {props.children}</p>
        </div>
    )
}

export default person;