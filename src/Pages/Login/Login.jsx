import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router';

export default function Login(){
    // UseNavigate para redirecionar
    const navigate = useNavigate(); 

    // UseState para armazenar os dados do Form
    const [usuario, setUsuario] = useState({
        'email':"",
        'senha':""
    })

    // Preenchimento do form
    const handleChange = (e) => {
        // Destructuring nos campos do Form(name,input)
        const{name,value} = e.target;

        // Preenchendo o UseState com os valores da desestruturação, utilizando o operador spread.
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let users;

        try {
            const response = await fetch ('....')
            users = await response.json()
        } catch (error) {
            alert('Ocorreu um erro!')
        }

        // Realizando a validação do usuário
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            
            // Realizando a comparação
            if (user.email == usuario.email && user.senha == usuario.senha){
                alert('LogIn realizado!');
                navigate('/');
                return;
            }
        }
        
        alert('LogIn ou senha incorretos!')
        setUsuario({
            "email":"",
            "senha":""
        })
    }
    
    return(
        <>
            <h1>LogIn</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Gerenciar Sua Conta</legend>
                        <div>
                            <label htmlFor="idEmail">Email</label>
                            <input type='email' name='email' id='idEmail' placeholder='seuemail@gmail.com' value={usuario.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha</label>
                            <input type='password' name='password' id='idPassword' placeholder='********' value={usuario.senha} onChange={handleChange} />
                        </div>
                        <div>
                            <button>LOGIN</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}