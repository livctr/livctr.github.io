import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--social-icons">
        <a
          href="https://github.com/livctr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="fa-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/livctr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
        </a>
        <a
          href="vhl2022[at]nyu[dot]edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
