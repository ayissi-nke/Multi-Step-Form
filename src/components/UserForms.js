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

    handleChange = input => event => {
         
        let value = event.target.value ;
        let name  = event.target.name;
         this.setState({
            [input]: event.target.value
        
         },()=>{

            this.validateFields(name,value);


         });
   }


    validateFields(fieldName,value){
        var regex = /^\w+@\w+\.\w{2,3}$/;
        switch(fieldName){
            case 'firstName':
                if(value.length < 5){
                    this.setState({
                        firstNameEror : 'name shl be 5>'   
                    })
                }else{
                    this.setState({
                        firstNameEror : ''   
                    }) 
                }
                break
            case 'lastName' :
                if(value.length<6){
                    this.setState({
                        lastNameEror:'enter last name greathe with atleast 5 letters'
                    })
                }  
                else{
                    this.setState({
                        lastNameEror:''
                    })
                } 
                break

                case 'email':
                    if(!regex.test(value)){
                      this.setState({
                          emailEror : 'invalid email'
                      })
                    }
                    else{
                        this.setState({
                            emailEror : ''
                        })
                    }
                break; 
            default:
                 
        }
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

