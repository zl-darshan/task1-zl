import "../styles/navbar.css"

export default function Navbar(props: {
    isLoggedIn: boolean,
    authUser: {
        email: string,
        password: string,
        toBeRemembered: boolean
    }
}): React.ReactNode {

    return (
        <nav>
            <div className="nav-container">
                <img src="./src/assets/Zeus-LMS-logo.svg" className="logo" />
                {props.isLoggedIn &&
                    <div className="profile-avatar">
                        <span>{props.authUser.email[0]?.toUpperCase() ?? "U"}</span>
                    </div>
                }
            </div>
        </nav>
    );
}