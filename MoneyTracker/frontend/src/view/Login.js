import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <form id="loginForm" class="loginForm">
            <div>
                <div>
                    <label id="username-label" for="username">Username:</label>
                    <input type="email" id="username" name="username" required placeholder="a@b.com" aria-labelledby="username-label" />
                </div>

                <div>
                    <label id="password-label" for="password">Password:</label>
                    <input type="password" id="password" name="password" required placeholder="*****" aria-labelledby="password-label" />
                </div>
            </div>

            <div>
                <Link to="/dashboard" class="loginBtn" role="button">Login</Link>
            </div>
        </form>
    );
}

export default Login
