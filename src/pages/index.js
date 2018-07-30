import React from 'react'
import Link from 'gatsby-link'
import Background from '../components/Background.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faPortrait, faBriefcase, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faFile, faPortrait, faBriefcase, faLink)

const IndexPage = (props) => (
	<div className="container full-height" >
		<Background />
		<section className="intro-section full-height">   
			<div className="wrapper full-height">	
				<div className="column-1 centered">
					<div className="section-wrapper align-center">	
						<div className="image-wrapper">
							<img src="https://media.licdn.com/dms/image/C4E03AQEyn1oUBRaRNQ/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=WwpfoDtbF4vHcCHY9f0s7F0b4K1BFLdeX6Z7M6pYnSQ" alt="portfolio picture"/>
						</div>
						<p className="intro-p-name">Edgar Mantes</p>
						<p>frontend developer at <span className="company-title">WHQ</span> Inc.</p>
					</div>	
				</div>
				<div className="column-1 centered">	
					<div className="blockquote">
						<blockquote className="quote">
							When something is important enough, you do it even if the odds are not in your favor
						</blockquote>
						<cite>- Elon Musk</cite>
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default IndexPage
