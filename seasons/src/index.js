import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            erroMessage: ''
        }
        window.navigator.geolocation.getCurrentPosition(
            positon => {
                this.setState({ lat: positon.coords.latitude })
            },
            err => {
                this.setState({ erroMessage: err.message })
            }
        )
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
      
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        
        
        return <Spinner message={"Please choose your location"}/>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root')) 