import * as React from 'react';

function Ball(props) {
	return (
		<svg width={20} height={26} viewBox='0 0 20 26' {...props}>
			<text
				data-name='\uF233'
				transform='translate(10 23)'
				fill='#fff'
				fontSize={26}
				fontFamily='Ionicons'
				letterSpacing='-0.01em'
			>
				<tspan x={-9.75} y={0}>
					{'\uF233'}
				</tspan>
			</text>
		</svg>
	);
}

export default Ball;
