import React from 'react'

const Background = (props) => {
	return (
		<div className="background-wrapper" style={{width: '100%', height: '100%'}}>
			<div className="bg-label background-ed border-left">	
			  <p className="ed">ed</p>	
			</div>
			<div className="bg-label background-g border-left">	
				<p className="ed">g</p>	
			</div>
			<div className="bg-label background-a border-left">	
				<p className="ed">a</p>	
			</div>
			<div className="bg-label background-r border-circle">	
				<p className="ed">r</p>	
			</div>
		</div>
	)
}

export default Background
