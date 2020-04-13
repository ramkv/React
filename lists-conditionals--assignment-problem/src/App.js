import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    inputLength : 0,
    inputValue : ''
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputLength : event.target.value.length,
      inputValue : event.target.value
    })
  }

  characterDeleteHandler = (event,index) => {
    let inputvalue = this.state.inputValue.split('');
    inputvalue.splice(index,1)

    // console.log('index value : '+index)
    // console.log('copied inputvalue : '+inputvalue)
    // console.log('state inputvalue : '+this.state.inputValue)

    this.setState({
      inputLength : inputvalue.join('').length,
      inputValue : inputvalue.join('')
    })


  }

  render() {
    let charArray = this.state.inputValue.split('').map( (character,index) => {
        return <CharComponent character ={character} key={index} deletefunction={ this.characterDeleteHandler.bind(this,Event,index) }/>
      }
      )
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input onChange={this.inputChangeHandler}  value={this.state.inputValue}></input>
        <p>The lenght of the input : {this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength}/>
        {charArray}        
      </div>
    );
  }
}

export default App;
