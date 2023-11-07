import { useState } from 'react';
import './Login.scss';
import logoMw from '../../Image/mw.png'
import { useNavigate } from 'react-router';
import { MdOutlineEmail, MdPassword } from 'react-icons/md';

export default function Login(){
    const logoAlt = 'Logo MW'

    // UseNavigate para redirecionar
    const navigate = useNavigate(); 

    // UseState para armazenar os dados do Form
    const [usuario, setUsuario] = useState({
        email:"",
        senha:""
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
            const response = await fetch ("http://localhost:5000/usuarios");
            users = await response.json();
        } catch (error) {
            alert('Ocorreu um erro!');
        }

        // Realizando a validação do usuário
        for (let x = 0; x < users.length; x++) {
            const user = users[x];
            // Realizando a comparação
            if(user.email == usuario.email && user.senha == usuario.senha){
                alert('LogIn realizado!');
                // Redirecionando pra página Home
                navigate('/Home');
                return;
            }
        }
        
        alert('LogIn ou senha incorretos!')
        setUsuario({
            email:"",
            senha:""
        })
    }
    
    return(
        <>
            <div className='form-login'>
                <form onSubmit={handleSubmit}>
                    <fieldset className='form'>
                        <header className='header-form'>
                            <img src={logoMw} alt={logoAlt} />
                            <h2>Gerenciar Sua Conta</h2>
                        </header>

                        <div className='email-form'>
                            <label htmlFor="idEmail"><MdOutlineEmail /></label>
                            <input type='email' name='email' id='idEmail' placeholder='seuemail@gmail.com' value={usuario.email} onChange={handleChange} />
                        </div>

                        <div className='password-form'>
                            <label htmlFor="idSenha"><MdPassword /></label>
                            <input type='password' name='senha' id='idSenha' placeholder='********' value={usuario.senha} onChange={handleChange} />
                        </div>

                        <div className='button-form'>
                            <button>ENTRAR</button>
                        </div>

                        <small className='copyright-form'>&copy; Sledge</small>
                    </fieldset>
                </form>
            </div>
        </>
    )
}