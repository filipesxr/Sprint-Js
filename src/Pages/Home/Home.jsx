import logoMw from '../../Image/mw.png'
import './Home.scss'

export default function Home() {
    const logoAlt = 'Logo MW'

    return(
        <>
            <header className='header-home'>
                <img src={logoMw} alt={logoAlt} />
                <h2>Seja bem-vindo ao seu Dashboard!</h2>
            </header>

            <div className='table-home-container'>
               <table className='table-home'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Aparelho</th>
                    <th>Watts</th>
                    <th>R$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>LED da Maquete</td>
                    <td>Fita de LED</td>
                    <td>0W</td>
                    <td>R$0,00</td>
                  </tr>
                </tbody>
              </table> 

              <div className='info-table-home'>
                <header>
                    <h3>Acumulativo</h3>
                </header>

                <p>Watts Acumulados: 0W</p>
                <p>Reais Acumulados: R$0,00</p>
              </div>
            </div>      
        </>
    )
}