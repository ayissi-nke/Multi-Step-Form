import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const {value:{firstName,lastName,email,occupation,city,bio}} = this.props ;
 
         return (
             <MuiThemeProvider>
                 <React.Fragment>
                     <AppBar title='CONFIMATION'/>
                       
                         <List>
                             <ListItem
                                primaryText="FirstName"
                                secondaryText={firstName}
                             />
                             <br/>
                             <ListItem
                                primaryText="LastName"
                                secondaryText={lastName}
                             />
                             <br/>
                             <ListItem
                                primaryText="Email"
                                secondaryText={email}
                             />
                             <ListItem
                                primaryText="Occupation"
                                secondaryText={occupation}
                             />
                             <br/>
                             <ListItem
                                primaryText="city"
                                secondaryText={city}
                             />
                             <br/>
                             <ListItem
                                primaryText="Bio"
                                secondaryText={bio}
                             />
                             <br/>
                         </List>
                         <RaisedButton
                        label=" confirm & continue"
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


export default Confirm
