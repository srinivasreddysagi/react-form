import React, { useState } from "react";

function Login() {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState(null);
    const [email, setEmail] = useState("Email");
    function changeHandler(e) {
        person = setPerson({...person, [e.name]: [e.value]});
        console.log(person);
    }

    function submitHandler(e) {
        e.preventDefault();
        persons = [...persons, person];
        console.log(persons);
    }

    return (
        <form action="submit" className="form">
            <div className="el email">
                <label htmlFor="email">Email</label>
                <input type="text" name="email"/>
            </div>
            <div className="el password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <button type="submit" className="btn" onClick={submitHandler}>
                Submit
            </button>
        </form>
    );
}

export default Login;
