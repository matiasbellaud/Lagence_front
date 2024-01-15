
const Login = () => {
    function ApiGet() {
        fetch('http://127.0.0.1:8000/api/films')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    return (
        
        <div className="login">
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <a href="/">inscription</a>
                <button onClick= {ApiGet()} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;