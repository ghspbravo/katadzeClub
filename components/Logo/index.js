import React, { Component } from 'react'
import { Image } from 'react-native'
import Styles from '../../constants/Styles';

export default class Logo extends Component {
	render() {
		return (
			<Image 
				source={require('./logo.png')}
				style={Styles.logo}
			/>
		)
	}
}
