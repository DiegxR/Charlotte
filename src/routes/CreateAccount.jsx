import React, {useState} from 'react';
import '../styles/CreateAccount.css';
import iconGoogle from "../img/icons/loginGoogle.svg";
import iconMicrosoft from "../img/icons/loginMicrosoft.svg";
import iconFacebook from "../img/icons/loginFacebook.svg";
import Logo from "../img/Logo.svg";


const CreateAccount = () => {
    const [state, setState] = useState(true);
    
    const genderSelect = (gender) =>{
        var inputGender = document.getElementById('Gender');
        inputGender.value = gender;
        setState(!state)
    }
    
    return (
        
        <>
        <div className='Background-img'></div>
        <div className="createAccount">

            <div className='Logo'>
            <img src={Logo} className="Logo"/>
            </div>
        <div className="Login">
         <div className="title">Create Account</div>
         <div className="loginRedes">
            <button>
                <img src={iconMicrosoft} alt="iconGooglen"/>
                <p>Login whit Microsoft</p>
            </button>
            <button>
                <img src={iconGoogle} alt="iconGoogle" />
                <p>Login whit Google</p>
            </button>
            <button>
                <img src={iconFacebook} alt="iconFacebook" />
                <p>Login whit Facebook</p>
            </button>
        </div>   
        <p>OR</p>
        <form>
            <input type="text" className="FirstName" placeholder="First Name" />
            <input type="text" className="LastName" placeholder="Last Name" />
            <input type="text" className="EmailAddress" placeholder="Email Address" />
            <input type="text" className="DateOfBirth" placeholder="Date Of Birth" />
            <input readOnly className={state ? "Gender1":"Gender1 GenderClose"} placeholder="Gender &#x2bc6;"  onClick={()=> setState((!state)) } id='Gender' />
            <input readOnly className={!state ? "Gender2":"Gender2 GenderOpen"} placeholder="&#x2bc5;" onClick={()=> setState((!state))} />
            
            <div className={!state ? "GenderOpt":"GenderOpt GenderOpen"}>
                <p onClick={() => genderSelect('Male')}>Male</p>
                <p onClick={() => genderSelect('Female')}> Female</p>
                <p onClick={() => genderSelect('Unspecified')}>Unspecified</p>
            </div>
            <div className="Loging">
            <input type="text" className="UserName"  placeholder="UserName" />
            <input type="text" className="Password" placeholder="Password" />
            </div>
            
        </form>
        <p>ALREADY HAVE AN ACCOUNT?  
            <a> LOGIN</a>
        </p>
        <button className='SingUp'>SING UP</button>
        </div>
        
        </div>
        
        </>
    );
}

export default CreateAccount;