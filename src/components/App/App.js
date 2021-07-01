import React from 'react';
import './App.css'

import Header from '../Header/header'
import SearchBox from '../SearchBox/searchbox';
import ResultContainer from '../ResultsContainer/resultscontainer';

const name = require('@rstacruz/startup-name-generator');

// functional Component
// function App() {
//     return <h1>This is my functional Component !</h1>
// }

// class Component
class App extends React.Component {

    // name cannot be changed

    // State - piece of data that we might need to save (and that might change later)
    // for rendering in future or for performing some actions in future
    constructor() {
        super();
        this.state = {
            headerText : 'Name It!',
            headerExpanded : true,
            suggestedNames : []
        }
    }

    // OR
    // state = {
    //     headerText : 'Name It!'
    // };

    handleChange = (inputText) => {
        // console.log(inputText)
        this.setState({
            // headerExpanded : inputText.length > 0  ? false : true
            headerExpanded : !inputText,
            suggestedNames : inputText ? name(inputText) : [],
        })
    }

    render(){
        return (
            <div>
                <Header 
                    headerExpanded = { this.state.headerExpanded }
                    headTitle = { this.state.headerText }
                />
                <SearchBox onInputChange = {this.handleChange}/>
                <ResultContainer suggestedNames = {this.state.suggestedNames} />
                {/* state example
                <h2>{ this.state.headerText }</h2> 

                <button onClick = {() => {
                    this.setState({
                        headerText : 'Woww, header text changed!!'
                    })
                }}>
                    Magic Happens Here!!
                </button>                 */}
            </div>            
        )
    }
}

export default App