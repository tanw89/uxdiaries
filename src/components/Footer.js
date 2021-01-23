import React from 'react';
import {FaLinkedin, FaGithub, FaChrome} from 'react-icons/fa';

function Footer() {
    return (
    <footer>
    <div className="footer-container">    
		<div className="col-3">
            <strong>Thank you for checking out my page.</strong>
            <br></br>
            <br></br>
            <p>Do note that all views expressed here are my own, and borne out of personal usage of these platforms. They are not a representation of my work nor are they made in an official capacity. I would also like to add that I recognise and admire all the efforts of those who have made these products, and have utmost respect for their craft and dedication (: Ping me via these channels if you want to reach out for coffee.</p>
		</div>
        
      	<div className="col-1">
			<ul className="unstyled-list">
                <a href="https://www.linkedin.com/in/tanweilie/"><FaLinkedin size={70} style={{ color: '#202f4f' }}/></a>
            </ul>
		</div>

		<div className="col-1">
			<ul className="unstyled-list">
                <a href="https://github.com/tanw89"><FaGithub size={70} style={{ color: '#202f4f' }} spin/></a>
			</ul>
		</div>

		<div className="col-1">
			<ul className="unstyled-list">
                <a href="https://tanw89.github.io/"><FaChrome size={70} style={{ color: '#202f4f' }}/></a>
			</ul>
        </div>
        
        </div>
    </footer>
    )
}

export default Footer;