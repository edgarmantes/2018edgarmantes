import React from 'react'
import Link from 'gatsby-link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faPortrait, faBriefcase, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faFile, faPortrait, faBriefcase, faLink)

const IndexPage = (props) => (
	<main className="container" >
		<nav className="nav-list">
			<ul className="nav-ul">
				<li className="nav-item">
					<a href="" className="nav-links">Home</a>
				</li>
				<li className="nav-item">
					<a href="" className="nav-links">About Me</a>
				</li>
				<li className="nav-item">
					<a href="" className="nav-links">My Work</a>
				</li>
				<li className="nav-item">
					<a href="" className="nav-links">Contact Me</a>
				</li>
			</ul>
		</nav>
		<div className="centered">
			<div className="myLogo"></div>
		</div>
		<div className="home-title">
			<h1 className="home-name">Edgar Mantes</h1>
			<p className="home-position">frontend developer at <span>WHQ Inc.</span></p>
		</div>
	</main>
)

export default IndexPage
