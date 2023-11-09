import "../styles/nav.css"

export default function Navbar(): React.ReactNode {
    return (
        <nav>
            <div className="nav-container">
                <img src="./src/assets/Zeus-LMS-logo.svg" className="logo" />
            </div>
        </nav>
    );
}