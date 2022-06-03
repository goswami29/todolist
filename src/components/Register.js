import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);

    const imageUpload = (e) => {
        //console.log("Upload", e.target.files);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        console.log(URL.createObjectURL(e.target.files[0]))
    }

    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };
      
    const register = () => {
        if(!name || !email || !password || !phone)
        {
          setErrorMsg(true);
          return false;
        }
        //console.log(name,email,password,phone);
        localStorage.setItem('userRegister', JSON.stringify({name,email,password,phone}));
        navigate('/login');
    }
    return (
        <div className='register'>
            <h1>Register Form</h1>
            <input type="text" className="inputBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            { errorMsg && !name ? <span className="invalid-input">Name is required </span> : ''}

            <input type="text" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
            { errorMsg && !email ? <span className="invalid-input">Email is required </span> : ''}

            <input type="password" className='inputBox' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            { errorMsg && !password ? <span className="invalid-input">Password is required </span> : ''}

            <input type="text" className="inputBox" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone Number" />
            { errorMsg && !phone ? <span className="invalid-input">Phone number is required </span> : ''}

            <input type="file" className="inputBox" onChange={(e) => imageUpload(e) } />
            {file && <ImageThumb image={file} />}

            <button className='appButton' onClick={register}> SignUp </button>
        </div>
    )
}

export default Register