import { createMuiTheme } from '@material-ui/core/styles';

const brandGreen = '#47AF31';
const brandBlue = '#50579B';
const brandBackground = '#EFF3F9';
const brandText = '#5C626D';
const brandHighlight = '#8A929F';
const brandDropdownBorder = '#00000033';
const brandDrawerBorder = '#0000000D';
const brandContainerBorder = '#FFFFFF';
const brandDivider = '#000000';
const brandArrow = '#22262A';
const brandArrowText = '#18191B';
const brandCategory = '#8A929F';

const theme = createMuiTheme({
	// using custom palette
	palette: {
		common: {
			white: '#FFFFFF',
			black: '#000000',
			blue: `${brandBlue}`,
			green: `${brandGreen}`,
			contentGray: `${brandText}`,
			categoryGray: `${brandCategory}`,
			backgroundGray: `${brandBackground}`,
			highLightGray: `${brandHighlight}`,
			arrowGray: `${brandArrow}`,
			arrowText: `${brandArrowText}`,
			dividerColor: `${brandDivider}`,
			borderDropdown: `${brandDropdownBorder}`,
			borderContainer: `${brandContainerBorder}`,
			borderDrawer: `${brandDrawerBorder}`
		},
		primary: {
			main: `${brandBlue}`
		},
		secondary: {
			main: `${brandGreen}`
		}
	}
});

export default theme;
