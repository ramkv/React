import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdd} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDelete(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        persons: state.persons
    }
    
}
const mapDispatchToProps = dispatch => { return {
    onPersonAdd : () => dispatch({type:'ADD_PERSON'}),
    onPersonDelete: (personId) => dispatch({ type: 'DELETE_PERSON', personId: personId })
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);