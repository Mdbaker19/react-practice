import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>My birth day is on the {props.day} day of the month</p>
            {/*children refers to the html in between the tags, empty tag if no info passed in tags*/}
            <p>My hobbies are: {props.children}</p>
        </div>
    )
}

export default person;