import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
           <div>
               Contact here

               <Link to="/">Back</Link>
           </div>
        );
    }
}

export default Contact;
