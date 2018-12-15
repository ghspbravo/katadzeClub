import React from 'react';
import {
	View,
} from 'react-native';
// import { WebBrowser } from 'expo';

import Styles from '../constants/Styles';
import MemberInfo from '../components/MemberInfo';
import MembershipStatus from '../components/MembershipStatus';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	navigateToAuthScreenHandler = () => {
		this.props.navigation.navigate('Auth')
	}

	render() {
		return (
			<View style={Styles.container}>
				<View style={Styles.containerInner}>
					<MemberInfo
						navigateToAuthScreen={this.navigateToAuthScreenHandler}
					/>
					<View style={{
						flex: 3,
						marginTop: 30
					}}>
						<MembershipStatus />
					</View>
				</View>
			</View>
		);
	}

	// _handleHelpPress = () => {
	//   WebBrowser.openBrowserAsync(
	//     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
	//   );
	// };
}