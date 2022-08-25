import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    async function submitLogin() {
        const response = await api.post('api/auth/login', {email, password});        
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        // redirecionar o user para a tela de login
        navigate('/');
    }
    return (
        <div className="form-signin w-100 mx-auto py-5 container">
            <form>
                <h1 className="h3 mb-3 fw-normal">Faça o Login</h1>

                <div className="form-floating">
                    <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                    <label >Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <label >Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={submitLogin} >Login</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>
        </div>
    );
}

export default LoginPage;