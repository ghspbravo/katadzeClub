import React, { Component } from 'react'
import { Image } from 'react-native'

export default class MemberInfo__Avatar extends Component {
	render() {
		return (
			<Image
				source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/41nH369UuhL.jpg' }}
				style={{
					width: 75,
					height: 75,
					borderRadius: 37,
					borderWidth: 3,
					borderColor: 'black'
				}}
			/>
		)
	}
}
