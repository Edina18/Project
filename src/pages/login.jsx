import { useAuth0 } from "@auth0/auth0-react";
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';

function Login() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <div className="auth">
                    {
                        isAuthenticated ? 
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                        :
                        <button onClick={() => loginWithRedirect()}><CiLogin/></button>
                    }
                </div>
    )
}

export default Login;