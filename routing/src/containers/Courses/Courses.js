import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <Route path="/Courses" exact render={() =>  <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map(course => {
                                return <Link to={{ pathname: this.props.match.url + '/' + course.title, search: "?courserid=" + course.id+"&coursename="+course.title }}> <article className="Course" key={course.id}>{course.title}</article></Link>;
                            })
                        }
                    </section>
                </div>}>
                </Route>
                <Route path="/Courses/*" component={Course}>
                </Route>
            </div>
        );
    }
}

export default Courses;