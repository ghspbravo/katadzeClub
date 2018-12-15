import { StyleSheet } from 'react-native'
import Colors from './Colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	containerInner: {
		paddingRight: 15,
		paddingLeft: 15,
		paddingBottom: 30,
		paddingTop: 60,
		flex: 1,
	},
	containerInner_titled: {
		paddingTop: 30,
		paddingRight: 15,
		paddingLeft: 15,
		paddingBottom: 30,
		flex: 1,
	},
	headerStyle: {
		backgroundColor: Colors.background,
		borderBottomWidth: 2,
		borderBottomColor: 'white',
	},
	logo: {
		width: 150,
		height: 100,
		resizeMode: 'contain',
		alignSelf: 'center'
	},
	text: {
		fontSize: 18,
		fontFamily: 'open-sans',
	},
	textWhite: {
		fontSize: 18,
		fontFamily: 'open-sans',
		color: 'white'
	},
	textLightWhite: {
		color: 'white',
		fontSize: 18,
		fontFamily: 'open-sans-light',
	},
	membershipCard: {
		flex: 1,
		maxHeight: 500,
		alignItems: 'center',
		padding: 5,
		justifyContent: 'space-between'
	},
	membershipCard__statusLabel: {
		fontSize: 36,
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	membershipCard__expireDate: {
		fontSize: 16,
		textAlign: 'right',
		alignSelf: 'stretch'
	},
	partnersItemCard: {
		borderRadius: 20,
		backgroundColor: 'white',
		padding: 15,
		height: 220,
		marginBottom: 30,
	},
	discountAmount: {
		fontSize: 64,
		color: Colors.acsent,
	},
	inputLabel: {
		color: 'white',
		textTransform: 'uppercase',
		fontSize: 14,
		fontFamily: 'open-sans-light'
	},
	inputField: {
		height: 50,
		backgroundColor: 'white',
		borderRadius: 25,
		marginTop: 5,
		padding: 10,
		fontSize: 18,
	},
	socialAuthButton: {
		width: 300,
		height: 50,
		marginBottom: 25,
		padding: 15,
		alignSelf: 'center'
	},
	socialAuthButtonInner: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1
	},
	socialAuthButtonText: {
		fontSize: 18,
		color: 'white',
		textTransform: 'uppercase',
	},
	socialAuthButtonIcon: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
		marginRight: 15,
	}
})