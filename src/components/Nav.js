import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {
	return (
		<nav className="nav-section">
			<ul className="nav-list">
				<li>
					<a href="">About Me</a>
					<FontAwesomeIcon className="about-me-icon nav-icon" icon="portrait" />
				</li>
				<li>
					<a href="">Projects</a>
					<FontAwesomeIcon className="projects nav-icon" icon="briefcase" />
				</li>
				<li>
					<a href="">LinkedIn</a>
					<FontAwesomeIcon className="projects nav-icon" icon="link" />
				</li>
				<li>
					<a href="">GitHub</a>
					<FontAwesomeIcon className="projects nav-icon" icon="file" />
				</li>
			
			</ul>
		</nav>
	)
}

export default Nav
