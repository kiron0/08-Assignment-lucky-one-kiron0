import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq'>
            <div className='faq-info'>
            <h2>Frequently Asked Questions</h2>
                <h4>* How React Works?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum voluptatem qui blanditiis nemo reprehenderit asperiores atque repellat mollitia, porro molestiae assumenda, quo dolorum incidunt unde et laudantium beatae vero.
                    </p>
                <h4>* Difference Between Props and State?</h4>
                    <p>
                        <strong>Props</strong><br />
                        1. Props are read-only. <br />
                        2. Props are immutable. <br />
                        3. Props can be accessed by the child component. <br />
                        4. Props are used to communicate between components. <br />
                        5. Props make components reusable. <br /> <br />
                        <strong>State</strong><br />
                        1. State changes can be asynchronous. <br />
                        2. State is mutable. <br />
                        3. State holds information about the components. <br />
                        4. State cannot be accessed by child components. <br />
                        5. Stateless components cannot have State.
                    </p>
                <h4>* How useState Works?</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum voluptatem qui blanditiis nemo reprehenderit asperiores atque repellat mollitia, porro molestiae assumenda, quo dolorum incidunt unde et laudantium beatae vero.</p>
            </div>
        </div>
    );
};

export default Faq;