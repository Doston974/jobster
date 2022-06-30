
import { Link } from 'react-router-dom';
import foto from '../assets/images/e37f3190-4905-48a7-b8a7-1e8dcce893ba.jpg'
import Logo from '../components/Logo';
import "../style/Landing.css"

const Landing = () => {
    return (
        <main>
           <Logo/>
            <div className='page'>
                {/*info*/}
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                    Founded in 2022, Lorem Ipsum is a bootstrapped company based in India. It has 1-5 employees currently and works in the domain of EcommerceFounded in Lorem Ipsum is a bootstrapped company based in India. It has  employees currently and works in the domain of Ecommerce
                    </p>
                    <div>  <button><Link to='/register'>Login/Register</Link></button></div>
                  
                </div>
                <img className='foto' src={foto} alt='jobster foto'/>
            </div>
        </main>
    )
};
export default Landing;