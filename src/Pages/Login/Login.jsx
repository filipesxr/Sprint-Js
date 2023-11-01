import './Login.scss';

export default function Login(){
    
    return(
        <>
            <h1>LogIn</h1>

            <div>
                <form>
                    <fieldset>
                        <label htmlFor="idEmail">Email</label>
                        <input type='email' name='email' id='idEmail' placeholder='seuemail@gmail.com' />
                        <label htmlFor="idSenha">Senha</label>
                        <input type='password' name='password' id='idPassword' placeholder='********' />
                    </fieldset>
                </form>
            </div>
        </>
    )
}