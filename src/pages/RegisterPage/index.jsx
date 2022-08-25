import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    async function submitUser() {
        const response = await api.post('api/auth/register', {name, email, password});        
        console.log(response.data);
        // redirecionar o user para a tela de login
        navigate('/login');
    }

    return (
        <div className="form-signin w-100 mx-auto py-5 container">
            <form >
                <h1 className="h3 mb-3 fw-normal">Faça o cadastro</h1>

                <div className="mb-3">
                    <label >Nome </label>
                    <input type="text" name="name" className="form-control" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label >Email </label>
                    <input type="email" name="email" className="form-control" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label >Senha</label>
                    <input type="password" name="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                </div>

                <button className="w-100 btn btn-lg btn-primary" onClick={submitUser} type="button">Cadastrar</button>
            </form>
        </div>
    );
}

export default RegisterPage;