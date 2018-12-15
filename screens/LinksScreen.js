import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../constants/Styles';
import Partners from '../components/Partners';

export default class LinksScreen extends React.Component {
	static navigationOptions = {
		title: 'Партнеры',
		headerStyle: Styles.headerStyle,
		headerTitleStyle: {
			color: 'white',
		},
	};

	_navigateToPartnerScreenHandler = () => {
		this.props.navigation.navigate('Partner', { id: 10 })
	}

	render() {
		return (
			<View style={Styles.container}>
				<Partners 
					openPartnerHandler={this._navigateToPartnerScreenHandler}
				/>
			</View>
		);
	}
}
