import React, { useState } from "react";
import axios from "axios";
function Staffregister(){
const [firstName, setFirstName] = useState(null);
const [lastName, setLastName] = useState(null);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [confirmPassword, setConfirmPassword] = useState(null);
<form onSubmit={handleSubmit}>
  <input
    className="form__input"
    type="text"
    value={firstName}
    onChange={(e) => handleInputChange(e, 'firstName')}
    id="firstName"
    placeholder="First Name"/>
     <input
    className="form__input"
    type="text"
    value={lastName}
    onChange={(e) => handleInputChange(e, 'lastName')}
    id="lastName"
    placeholder="Last Name"/>
     <input
    className="form__input"
    type="password"
    value={confirmPassword}
    onChange={(e) => handleInputChange(e, 'confirmPassword')}
    id="confirmPassword"
    placeholder="Confirm Password"/>
     <button type="submit" class="btn">
    Register
  </button>
</form>
const handleInputChange = (e, id) => {
    if (id === 'firstName') {
      setFirstName(e.target.value);
    }
    if (id === 'lastName') {
      setLastName(e.target.value);
    }
    if (id === 'email') {
      setEmail(e.target.value);
    }
    if (id === 'password') {
      setPassword(e.target.value);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement staff registration logic
    axios
      .post('/api/register-staff', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log('Staff registered successfully!', response.data);
      })
      .catch((error) => {
        console.error('Failed to register staff:', error);
      });
  };
}
  export default Staffregister