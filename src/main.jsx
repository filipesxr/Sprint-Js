import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importando as Rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login/Login.jsx';
import Error404 from './Pages/Error404/Error404.jsx';
import Home from './Pages/Home/Home.jsx';

// Criando as Rotas
const router = createBrowserRouter([
  {path:'/', element:<App />, errorElement:<Error404 />,
    children:[
      {path:'/', element:<Login />},
      {path:'/', element:<Home />}
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
