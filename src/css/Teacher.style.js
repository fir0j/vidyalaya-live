import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	BackdropProps: {
		background: 'transparent'
	},
	appbar: {
		maxWidth: '1920px',
		zIndex: theme.zIndex.modal + 1
	},
	logo: {
		marginLeft: '2rem',
		font: 'Bold Italic 32px/42px Gibson BoldItalic',
		letterSpacing: '0.64px',
		color: 'white'
	},
	tabs: {
		marginLeft: 'auto'
	},
	center: {
		display: 'flex',
		justifyContent: 'center'
	},
	toolbar: {
		...theme.mixins.toolbar
	},
	drawer: {
		backgroundColor: theme.palette.common.white,
		'&.MuiPaper-elevation16': {
			boxShadow: '0px 8px 10px -5px rgba(0,0,0,0.2)'
		}
	},
	drawerIconContainer: {
		padding: 0,
		marginRight: '2rem',
		marginLeft: '1rem',
		color: theme.palette.common.white,
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	drawerIcon: {
		width: '32px',
		height: '32px'
	},

	ListItemIcon: {
		width: '20px',
		height: '20px'
	},
	drawerText: {
		color: theme.palette.common.grayText,
		opacity: 0.7
	},

	drawerItem: {
		'&.MuiListItem-root': {
			marginBottom: '15px',
			'&:hover': {
				boxShadow: '0px 3px 4px #00000029',
				borderRadius: '4px'
			}
		},
		'&.Mui-selected': {
			boxShadow: '0px 3px 4px #00000029',
			borderRadius: '4px'
		}
	},
	overlay: {
		backgroundColor: 'red'
	},

	category: {
		color: theme.palette.common.contentGray
		// border: '1px solid blue'
	},
	list: {
		marginLeft: '15px',
		marginRight: '15px'
	},
	listTopMargin: {
		marginTop: '15px'
	},
	content: {
		marginLeft: '222px'
	}
}));

export default useStyles;
