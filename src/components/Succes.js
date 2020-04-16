import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'



export class Succes extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }



    render() {

      
        
 
         return (
             <MuiThemeProvider>
                 <React.Fragment>
                     <AppBar title='SUCCESS'/>
                        <h2>THANK YOU FOR YOUR SUMISSION</h2>
                        <p>You will get an Email with futher instructions</p>
                        <br/>
                        <RaisedButton
                        label="Back"
                        style={styles.button}
                        onClick= {this.back}
                        />
                 </React.Fragment>
             </MuiThemeProvider>
         )
     }
}

const styles  = {
    button: {
        margin: 35
    }
}

export default Succes
