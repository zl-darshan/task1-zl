import "../styles/footer.css"

export default function Footer(): React.ReactNode {
    return (
        <footer>
            <button className="about">About</button>
            <span className="bar"> | </span>
            <button className="contact-us">Contact Us</button>
        </footer>
    );
}