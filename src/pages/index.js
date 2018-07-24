import React from 'react'
import Link from 'gatsby-link'
import Background from '../components/Background.js'

const IndexPage = (props) => (
	<div className="container full-height" >
		<Background />
		<section className="intro-section full-height">   
			<div className="wrapper full-height">	
				<div className="column-1 centered">	
					<h1>Left side</h1>
				</div>
				<div className="column-1 centered">	
					<h1>Right side</h1>
				</div>
			</div>
		</section>
	</div>
)

export default IndexPage
