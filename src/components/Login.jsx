import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Login() {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState({ email: "", password: "" });
    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    }

    function submitHandler(e) {
        e.preventDefault();
        const { email, password } = person;
        if (email && password) {
            setPersons([...persons, { ...person, id: uuidv4() }]);
            person.email = '';
            person.password = '';
        }
    }

    return (
        <>
            <form action="submit" className="form">
                <div className="el email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={person.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="el password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={person.password}
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit" className="btn" onClick={submitHandler}>
                    Submit
                </button>
            </form>
            <div className="persons">
            {persons.length ? "Logins - Activity" : null}
                {persons.map((item) => <div className="log">{item.email}: {item.password}</div> )}
            </div>
        </>
    );
}

export default Login;
