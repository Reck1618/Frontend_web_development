import React from "react";

function FetchApi() {
    const [user, setUser] = React.useState([]);

    const fetchUser = () => {
        fetch("https://randomuser.me/api/?results=1").then(response => response.json()).then(data => setUser(data))
    }

    React.useEffect(() => {
        fetchUser();
    }, []);

    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Required Data</h1>
            <h2>First Name: {
                user.results[0].name.first
            }</h2>
            <h2>Last Name: {
                user.results[0].name.last
            }</h2>
            <img src={user.results[0].picture.large} alt=""></img>
        </div>
    ) : (
        <h1>Data Pending...</h1>
    );

}

export default FetchApi;
