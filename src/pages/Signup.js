import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"

function Signup({setIsLoggedIn}) {
    return (
        <div>
            <Template title="Join the millions learning to code using StudyNotion for free" desc1="Build skills for today, tomorrow and beyond" desc2="Education to future-proof your career" image={signupImg} setIsLoggedIn={setIsLoggedIn} formtype="signup"/>
        </div>
    )
}

export default Signup