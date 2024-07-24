import { useEffect, useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  })


  return(
    <div>Register</div>
  )
}

export default Register;
