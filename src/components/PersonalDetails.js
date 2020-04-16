import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class PersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
  
    render() {
        const {value,handleChange} = this.props ;
 
         return (
             <MuiThemeProvider>
                 <React.Fragment>
                     <AppBar title='Enter Personals D'/>
                     <TextField hintText='Occupation'
                        floatingLabelText="occupation"
                        onChange={handleChange('occupation')} 
                        defaultValue= {value.occupation}/>
 
                        <br/>
                        <TextField hintText='City'
                        floatingLabelText="City"
                        onChange={handleChange('city')} 
                        defaultValue={value.city}/>
                        <br/>
 
                        <TextField hintText='Bio'
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={value.bio}
                        />
                        <br/>
                        <RaisedButton
                        label="continue"
                        primary={true}
                        style={styles.button}
                        onClick= {this.continue}
                        />

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


export default PersonalDetails
