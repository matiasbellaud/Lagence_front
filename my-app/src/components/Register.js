const Register = () => {
    function formData() {
        const data = new FormData();
        data.append('Nom', 'Nom');
        data.append('Prenom', 'Prenom');
        data.append('email', 'email');
        data.append('password', 'password');
        return data;
    }
    return (
        <div>
            <h2>Register</h2>
            <form>
                <label htmlFor="Nom">Nom</label>
                <input type="text" name="Nom" />
                <label htmlFor="Prenom" name="Prenom">Prenom</label>
                <input type="text" name="Prenom" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button type="submit" onClick={formData}>Register</button>
            </form>
        </div>
    );
};

export default Register;