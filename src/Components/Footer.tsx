import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

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
        <a
          href="https://scholar.google.com/citations?hl=en&user=wiZHFH4AAAAJ&view_op=list_works&gmla=AOv-ny-zi1VhvD1T4Rhgr_lEG0EgWzi6SKmdcJiuxiIMY7hrXCC5FXK64lOMZB0bMJ3Uj-ehhntlimlMY16cXUDsRvf3o7CCdiuuW-VKUMAHbOydTCpFNIIzcF3s#d=gs_hdr_drw&t=1739482201654"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGoogleScholar} className="fa-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
