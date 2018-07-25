import React from 'react'
import Link from 'gatsby-link'
import Background from '../components/Background.js'

const IndexPage = (props) => (
	<div className="container full-height" >
		<Background />
		<section className="intro-section full-height">   
			<div className="wrapper full-height">	
				<div className="column-1 centered">
					<div className="section-wrapper align-center">	
						<div className="image-wrapper"></div>
						<p className="intro-p-name">Edgar Mantes</p>
						<p>frontend developer at <span className="company-title">WHQ</span> Inc.</p>
					</div>	
				</div>
				<div className="column-1 centered">	
					<blockquote className="blockquote">When something is important enough, you do it even if the odds are not in your favor</blockquote>
				</div>
			</div>
		</section>
	</div>
)

export default IndexPage
