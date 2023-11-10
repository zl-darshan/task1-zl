import "../styles/loginpage.css"

export default function Login(props:
    {
        userData: { email: string; password: string; toBeRemembered: boolean },
        isPasswordVisible: boolean,
        handleInputChange: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>) => void,
        handleLoginSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    },
): React.ReactNode {

    return (
        <div className="login-section">
            <div className="login-div">
                <h2 className="title">Log in</h2>
                <div className="input-form">
                    <div className="email-div">
                        <input
                            type="email"
                            placeholder="Email ID*"
                            className="input email"
                            name="email"
                            value={props.userData.email}
                            onChange={props.handleInputChange}
                        />
                        <button className="forgot-btn forgot-email">
                            FORGOT EMAIL ID?
                        </button>

                    </div>

                    <div className="password-div" >
                        <input
                            type={props.isPasswordVisible ? "text" : "password"}
                            placeholder="Password*"
                            className="input password"
                            name="password"
                            value={props.userData.password}
                            onChange={props.handleInputChange}
                        />

                        <button className="forgot-btn forgot-password">
                            FORGOT PASSWORD
                        </button>

                        <span className="password-visibility-icon">
                            <img
                                className="logo"
                                src="./src/assets/visibility_black_24dp.svg"
                                data-password-toggle-btn="true"
                                onClick={props.handleInputChange}
                            />
                        </span>
                    </div>

                    <div className="checkbox-div">
                        <input type="checkbox" name="toBeRemembered" id="toBeRemembered" onChange={props.handleInputChange} />
                        <label htmlFor="toBeRemembered" className="toBeRemembered">
                            Remember Me
                        </label>
                    </div>

                    <button className="login"
                        onClick={props.handleLoginSubmit}>
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