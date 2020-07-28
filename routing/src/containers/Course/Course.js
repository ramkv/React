import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

let regex = /[?&]([^=#]+)=([^&#]*)/g;

class Course extends Component {
    
    
    parseurl = (url) => {
        let match = null;
        let params = {}
        while ((match = regex.exec(url))) {
            params[match[1]] = match[2]
        }
        return params
    }

    render() {
        let { courserid , coursename } = this.parseurl(this.props.location.search)
        console.log(this.parseurl(this.props.location.search));
        console.log(coursename);
        return (
            <div>
                <h1>{coursename.replace(/%20/g, " ")}</h1>
                <p>You selected the Course with ID:{courserid}</p>
            </div>
        );
    }
}

export default withRouter(Course);