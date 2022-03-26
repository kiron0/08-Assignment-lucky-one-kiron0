import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq'>
            <div className='faq-info'>
            <h2>Frequently Asked Questions</h2>
            <h4>* How Does React Work?</h4>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                    </p>
            <h4>* Difference Between Props and State?</h4>
                <p>
                    <strong><u>Props</u></strong><br />
                    1. Props are read-only. <br />
                    2. Props are immutable. <br />
                    3. Props can be accessed by the child component. <br />
                    4. Props are used to communicate between components. <br />
                    5. Props make components reusable. <br /> <br />
                    <strong><u>State</u></strong><br />
                    1. State changes can be asynchronous. <br />
                    2. State is mutable. <br />
                    3. State holds information about the components. <br />
                    4. State cannot be accessed by child components. <br />
                    5. Stateless components cannot have State.
                </p>
            <h4>* How useState Works?</h4>
                <p>useState is a React Hook that allows you to have state variables in functional components. You have to pass the initial state to this function and it returns a variable with the current state value and another function to update this value.
                </p>
            </div>
        </div>
    );
};

export default Faq;