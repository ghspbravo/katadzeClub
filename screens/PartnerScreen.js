import React from 'react';
import {
	View,
	Image,
} from 'react-native';
import Styles from '../constants/Styles';
import PartnerDescription from '../components/Partner/PartnerDescription';
import PartnerActivateButton from '../components/Partner/PartnerActivateButton';

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isActivated: false
		}
	}

	static navigationOptions = {
		title: 'Солнечная',
		headerStyle: Styles.headerStyle,
		headerTitleStyle: {
			color: 'white',
		},
		headerTintColor: 'white',
	};

	render() {
		return (
			<View style={Styles.container}>
				<Image
					style={{
						maxHeight: 250,
						flex: 3
					}}
					source={{ uri: 'https://pro-ride.com/files/level%202%20snowboard%20instructor%20course.jpg' }}
				/>
				<View style={{ flex: 5 }}>
					<PartnerDescription />
				</View>
				<View style={{ marginTop: 30, flex: 2 }}>
					<PartnerActivateButton 
						isActivated={this.state.isActivated}
					/>
				</View>
			</View>
		);
	}
}