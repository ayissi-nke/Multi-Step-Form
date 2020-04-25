import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class Userdetails extends Component {


   


    continue = e => {
            this.props.nextStep();
            e.preventDefault();
    }

    render() {

      
       const {value,handleChange} = this.props ;

        return (
            <MuiThemeProvider>
                <React.Fragment  >
                    <AppBar title='Enter use DETAILS'/>
                    <TextField hintText='Ente your First Name'
                       floatingLabelText="First Name"
                       onChange={handleChange('firstName')} 
                       Value= {value.firstName}
                       name="firstName"
                       />
                       <br/>
                       <div>{value.firstNameEror}</div>

                       <br/>
                       <TextField hintText='Ente your Last Name'
                       floatingLabelText="Last Name"
                       onChange={handleChange('LastName')} 
                       Value={value.lastName}
                       name="lastName"
                       />
                       <br/>
                       <div>{value.lastNameEror}</div>
                       <br/>
                       <TextField hintText='Ente your Email'
                       floatingLabelText="Email"
                       onChange={handleChange('email')}
                       Value={value.email}
                       name="email"
                       />
                       <br/>
                       <div>{value.emailEror}</div>
                       <br/>
                       <RaisedButton
                       label="continue"
                       primary={true}
                       style={styles.button}
                       onClick= {this.continue}
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

export default Userdetails
