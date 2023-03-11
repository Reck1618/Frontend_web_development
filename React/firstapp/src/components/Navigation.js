function Navigation(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="/">{props.first}</a></li>
                <li><a href="/">{props.second}</a></li>
                <li><a href="/">{props.third}</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;