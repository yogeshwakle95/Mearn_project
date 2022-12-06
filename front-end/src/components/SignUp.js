import React,{useState} from 'react'

const SignUp = () => {
    const [name, setName] = useState("");
    const [passWord, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const collectData = async ()=>{
        console.warn(name, email, passWord);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, passWord }),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        result = await result.json()
        console.warn(result);

    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            <input className="inputBox" type="text"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter PassWord" />

            <input className="inputBox" type="text"
                value={passWord} onChange={(e) => setPassword(e.target.value)} placeholder="Enter E-mail" />
            <button onClick={collectData} className="appbutton" type="button">Sign Up</button>
        </div>
    )
}
export default SignUp;