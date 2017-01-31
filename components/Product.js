const React = require('react')

class Product extends React.Component {
	render() {
		return (
			<div> 
				<h1>{this.props.name}</h1>
				<p>{this.props.producer}</p>
				<p>{this.props.hasWatermark}</p>
				<p>{this.props.color}</p>
				<p>{this.props.weight}</p>
			</div>
		)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, element) {
	    if (props[element] === undefined) {
	      return new Error('weight is required')
	    } else if (isNaN(props[element])) {
	      return new Error('weight needs to be a number')
	    } else if (props[element] < 80 || props[element] > 300) {
	      return new Error('weight needs to be between 80 and 300')
	    }
	}
}	

module.exports = Product
