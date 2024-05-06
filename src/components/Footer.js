import "./Footer.css";
import SocialIcons from "./SocialIcons";

const clickHandler = () => {
    window.location.href = "mailto:aslakaaj@gmail.com";
}

const Footer = () =>{
    return(<div className="footer_box">
        <h1 className="footer_title">Work with me?</h1>
        <button className="footer_btn" onClick={clickHandler} type="button">Send me a mail</button>
        <SocialIcons/>
        <p className="byline">© Aslak Aa. Jønsson - 2024</p>
    </div>);
}

export default Footer;