import git_logo from "../img/icons/github-mark.svg";
import x_logo from "../img/icons/x-logo.webp";
import fiverr_logo from "../img/icons/fiverr-logo.webp";

import "./SocialIcons.css";

const SocialIcons = () => {
    return(
        <ul className="social_icons">
            <a href="https://github.com/aslakaaj"><li className="icon"><img src={git_logo} alt="link to github profile" /></li></a>
            <a href="https://twitter.com/AslakJonsson"><li className="icon"><img src={x_logo} alt="link to twitter/x profile" /></li></a>
            <a href="https://www.fiverr.com/aslakjonsson"><li className="icon"><img src={fiverr_logo} alt="link to fiverr profile" /></li></a>
            {/* <li className="icon"><img src="" alt="" /></li> */}
        </ul>
    );
}

export default SocialIcons;