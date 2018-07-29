import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {
	return (
		<nav className="nav-section">
			<ul className="nav-list">
				<li>
					<a href="">About Me</a>
					<FontAwesomeIcon className="about-me-icon" icon="portrait" />
				</li>
				<li>
					<a href="">Projects</a>
				</li>
				<li>
					<a href="">LinkedIn</a>
				</li>
				<li>
					<a href="">GitHub</a>
				</li>
				<li>
					<div>
						<FontAwesomeIcon icon="file" size="xs" />
					</div>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
