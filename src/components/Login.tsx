import "../styles/loginpage.css"

export default function Login(): React.ReactNode {
    return (
        <div className="login-section">
            <div className="login-div">
                <h2 className="title">Log in</h2>
                <div className="input-form">
                    <div className="email-div">
                        <input
                            type="text"
                            placeholder="Email ID*"
                            className="input email"
                            name="email"
                        />
                        <button className="forgot-btn forgot-email">
                            FORGOT EMAIL ID?
                        </button>

                    </div>
                    <div className="password-div" >
                        <input
                            type="text"
                            placeholder="Password*"
                            className="input password"
                            name="password"
                        />

                        <button className="forgot-btn forgot-password">
                            FORGOT PASSWORD
                        </button>
                        <span className="password-visibility-icon">
                            <img src="./src/assets/visibility_black_24dp.svg" className="logo" />
                        </span>
                    </div>
                    <div className="checkbox-div">
                        <input type="checkbox" name="remember-me" id="remember-me" />
                        <label htmlFor="remember-me" className="remember-me">
                            Remember Me
                        </label>
                    </div>
                    <button className="login">
                        LOG IN
                    </button>
                </div>
                <div className="signup-flow">
                    <span className="text">Not registered yet?</span>
                    <div>
                        <button className="create-account">
                            CREATE AN ACCOUNT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}