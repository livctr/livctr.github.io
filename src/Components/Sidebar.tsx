import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar--container">
      <div className="sidebar--image--container">
        <img src="/img/me.jpg" alt="Victor Li" className="sidebar--image" />
      </div>
      <a
        href="mailto:vhl2022@nyu.edu"
        className="sidebar--link"
      >
        <FontAwesomeIcon icon={faEnvelope} className="sidebar--icon" />
        <span className="sidebar--label">Email</span>
      </a>
      <a
        href="https://www.linkedin.com/in/livctr/"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar--link"
      >
        <FontAwesomeIcon icon={faLinkedin} className="sidebar--icon" />
        <span className="sidebar--label">LinkedIn</span>
      </a>
      <a
        href="https://github.com/livctr"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar--link"
      >
        <FontAwesomeIcon icon={faGithub} className="sidebar--icon" />
        <span className="sidebar--label">GitHub</span>
      </a>
      <a
        href="https://scholar.google.com/citations?hl=en&user=wiZHFH4AAAAJ&view_op=list_works&gmla=AOv-ny-zi1VhvD1T4Rhgr_lEG0EgWzi6SKmdcJiuxiIMY7hrXCC5FXK64lOMZB0bMJ3Uj-ehhntlimlMY16cXUDsRvf3o7CCdiuuW-VKUMAHbOydTCpFNIIzcF3s#d=gs_hdr_drw&t=1739482201654"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar--link"
      >
        <FontAwesomeIcon icon={faGoogleScholar} className="sidebar--icon" />
        <span className="sidebar--label">Google Scholar</span>
      </a>
    </div>
  );
}

export default Sidebar;
