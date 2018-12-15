import React from 'react';
import {
	View,
	ScrollView,
} from 'react-native';

import Styles from '../constants/Styles';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import AuthSocialVk from '../components/AuthSocial/AuthSocialVk';
import AuthSocialFacebook from '../components/AuthSocial/AuthSocialFacebook';

export default class AuthScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	_navigateToMainHandler = () => {
		this.props.navigation.navigate('Main')
	}

	render() {
		return (
			<ScrollView style={Styles.container}>
				<View style={[Styles.containerInner, {
					justifyContent: 'space-between'
				}]}>
					<Logo />
					<LoginForm
						navigateToMain={this._navigateToMainHandler}
					/>
					<View style={{
						marginTop: 50
					}}>
						<AuthSocialVk />
						<AuthSocialFacebook />
					</View>
				</View>
			</ScrollView>
		);
	}
}