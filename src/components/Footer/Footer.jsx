import './Footer.css';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

export function Footer() {
	return (
		<>
			<footer className="footer">
				<p>Project: Átila Mariano</p>
				<span className="icons">
					<FaLinkedin className="linkedin" />
					<FaGithub className="github" />
					<FaInstagram className="instagram" />
					<FaFacebook className="facebook" />
				</span>
			</footer>
		</>
	);
}
