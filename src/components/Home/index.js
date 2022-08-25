import { Link } from 'react-router-dom';
import './index.scss'


const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> Hola, <br /> bonjour, <br /> salve, <br /> nin hāo,

                <br />

                I'm a Full Stackstack Web Developer from Chicago,IL 
                <br />

                Student at Michigan State <i class="fa fa-university" aria-hidden="true"></i>
                </h1>
                 alt="spartan-3"/>

                <h2>Coding Languages Learned : HTML,CSS,JAVASCRIPT,REACT,NODEJS</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}


export default Home