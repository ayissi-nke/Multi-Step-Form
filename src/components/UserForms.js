import React, { Component } from 'react'
import Userdetails from './Userdetails'
import PersonalDetails from './PersonalDetails'
import Confirm from './Confirm'
import Succes from './Succes'


export class UserForms extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            step:1,
            firstName:'',
            lastName:'',
            email:'',
            occupation:'',
            city:'',
            bio:'',
            firstNameEror:'',
            lastNameEror:'',
            emailEror:'',
            
        }
    }
    

     
    emailErorDisplay =()=>{
       this.setState({
          emailEror :"invalid email" 
       });
    }

    

   //go to the next step
    nextStep = () =>{
        const {step}=this.state ;
        this.setState({
            step:step+1
        });
    }


    // previous step 

    previousStep = () =>{
        const {step}=this.state ;
        this.setState({
            step:step-1
        });
    }

    handleChange = input => e => {
        this.setState({
           [input]: e.target.value 
           
           
           
        }, ()=>{
            if(!this.state.email.includes('@')){
                this.setState({
                   emailEror : "invalid email"
                });
            }
        });
      
    }

    

    render() {
       const {step} = this.state ;
       const {firstName,lastName,email,occupation,city,bio,firstNameEror,lastNameEror,emailEror} = this.state ;
       const value = {firstName,lastName,email,occupation,city,bio,firstNameEror,lastNameEror,emailEror} ;

       switch(step){
            case 1:
                return( <Userdetails
                    nextStep = { this.nextStep}
                    handleChange = {this.handleChange}
                    value = {value}
                    emailErorDisplay = {this.emailErorDisplay}
                    
                    />
                )
            case 2:
                return( <PersonalDetails
                    nextStep = { this.nextStep}
                    previousStep = {this.previousStep}
                    handleChange = {this.handleChange}
                    value = {value}
                    />
                )
            case 3:
                return( <Confirm
                    nextStep = { this.nextStep}
                    previousStep = {this.previousStep}
                    handleChange = {this.handleChange}
                    value = {value}
                    />
                )
            case 4 :
                return(
                    <Succes
                    
                    previousStep = {this.previousStep}
                    />
                )  
            default:



       }

        return (
            <div>
                
            </div>
        )
    }
}

export default UserForms

