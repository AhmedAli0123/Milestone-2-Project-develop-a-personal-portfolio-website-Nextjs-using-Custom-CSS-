import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


export default function Footer() {
    return (
      <section>
        <footer id="footer">
          <div className="footer-content">
            <div className="gmail">
              <a href="mailto:ahmedsiridab1@gmail.com">ahmedsiridab1@gmail.com</a>
            </div>
  
            <div className="foot-icon">
              <a href="https://www.linkedin.com/in/ahmed-ali-160b2a313/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'rgb(177, 166, 166)' }} />
              </a>
              
              <a href="https://www.facebook.com/profile.php?id=100080215097122" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'rgb(177, 166, 166)' }} />
              </a>
              
              <a href="https://github.com/AhmedAli0123" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} style={{ color: 'rgb(177, 166, 166)' }} />
              </a>
              
              <a href="mailto:ahmedsiridab1@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPaperPlane}  style={{ color: 'rgb(177, 166, 166)' }}/>
              </a>
            </div>

            <div className="foot-para">
              Copyright © Ahmed Ali 2024, All rights reserved
            </div>
          </div>
        </footer>
      </section>
    );
  }
  