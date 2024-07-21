import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <form id="loginForm" class="loginForm">
            <div>
                <div>
                    <label for="username">Username:</label>
                    <input type="email" id="username" name="username" required placeholder="a@b.com" />
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required placeholder="*****" />
                </div>
            </div>

            <div>
                <Link class="loginBtn" to="/dashboard">Login</Link>
            </div>
        </form>
    );
}

export default Login