import React from 'react'

export const Blank = () =>{
	return (
    <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
		  <g>
			  <title>Layer 1</title>
			  <rect className="domino_border" fill="none" strokeWidth="2" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" x="32.5" y="9.60156" width="45" height="90" id="svg_12" stroke="#000000"/>
			  <line className="domino_divider" id="svg_13" y2="55" x2="75" y1="55" x1="35" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="2" stroke="#000000" fill="none"/>
		  </g>
		</svg>
	)
}

export const Deuce = () =>{
  return (
	  <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
		  <g>
		    <title>Layer 1</title>
		    <rect className="domino_border" fill="none" strokeWidth="2" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" x="32.5" y="9.60156" width="45" height="90" id="svg_12" stroke="#000000"/>
		    <line className="domino_divider" id="svg_13" y2="55" x2="75" y1="55" x1="35" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="2" stroke="#000000" fill="none"/>
		    <circle stroke="#000000" className="domino_pip" id="pip_1" r="4" cy="32.10156" cx="55" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="2" fill="none"/>
		    <circle stroke="#000000" className="domino_pip" id="pip_2" r="4" cy="77.10156" cx="55" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="2" fill="none"/>
		  </g>
		</svg>
  )
}