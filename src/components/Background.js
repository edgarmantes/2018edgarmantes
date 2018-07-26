import React from 'react'

const Background = (props) => {
	return (
		<div className="background-wrapper" style={{width: '100%', height: '100%'}}>
			<div className="bg-label background-ed border-left">	
			  <p className="ed">ed</p>
			  <p className="ed">ma</p>	
			</div>
			<div className="bg-label background-g border-left">	
				<p className="ed">g</p>	
				<p className="ed">nt</p>
			</div>
			<div className="bg-label background-a border-left">	
				<p className="ed">a</p>	
				<p className="ed">e</p>
			</div>
			<div className="bg-label background-r border-circle">	
				<p className="ed">r</p>	
				<p className="ed">s</p>
			</div>
		</div>
	)
}

export default Background
