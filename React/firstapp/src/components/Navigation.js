import { Link } from 'react-router-dom';
function Navigation(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/" className="nav-item">{props.first}</Link></li>
                <li><Link to="/aboutMe" className="nav-item">{props.second}</Link></li>
                <li><Link to="#" className="nav-item">{props.third}</Link></li>
                <li><Link to="/signUp" className="nav-item">{props.fourth}</Link></li>
                <li><Link to="/goals" className="nav-item">{props.fifth}</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;