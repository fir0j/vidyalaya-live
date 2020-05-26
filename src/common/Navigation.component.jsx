import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	useTheme,
	useMediaQuery
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';

// custom imports
import useStyles from '../css/Teacher.style.js';
import IconClassroom from '../icons/school-24px.svg';
import IconVideo from '../icons/movie_creation-24px.svg';
import IconAssignment from '../icons/Assignment.svg';
import IconNote from '../icons/Notes.svg';
import IconSetting from '../icons/Account_Settings.svg';
import IconContact from '../icons/contact.svg';
import IconFaq from '../icons/faq.svg';

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

const Navigation = () => {
	const classes = useStyles();
	const [ value, setValue ] = useState(0);
	const [ openDrawer, setOpenDrawer ] = useState(true);
	const theme = useTheme();
	const onMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	useEffect(
		() => {
			if (openDrawer) setOpenDrawer(false);
			if (!onMobile) setOpenDrawer(true);
		},
		[ onMobile ]
	);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClose = () => {
		if (onMobile) {
			setOpenDrawer(false);
		}
	};

	const mobileDrawer = (
		<SwipeableDrawer
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}
			open={openDrawer}
			onClose={() => handleClose()}
			onOpen={() => setOpenDrawer(true)}
			classes={{ paper: classes.drawer }}
			ModalProps={{
				BackdropProps: {
					classes: {
						root: classes.BackdropProps
					}
				}
			}}
		>
			<div className={classes.toolbar} />
			<div className={classes.listTopMargin} />
			<List className={classes.list} disablePadding>
				<ListItem
					key="0"
					button
					component={Link}
					to="/teacher/classroom"
					selected={value === 0}
					onClick={() => {
						setValue(0);
					}}
					className={classes.drawerItem}
				>
					<ListItemIcon>
						<img alt="classroom-icon" src={IconClassroom} />
					</ListItemIcon>
					<ListItemText className={classes.drawerText} disableTypography>
						Classroom
					</ListItemText>
				</ListItem>

				<Typography variant="subtitle1" noWrap className={classes.category}>
					MANAGE
				</Typography>

				<ListItem
					key="1"
					button
					component={Link}
					to="/teacher/video"
					selected={value === 1}
					onClick={() => {
						setValue(1);
					}}
					className={classes.drawerItem}
				>
					<ListItemIcon>
						<img alt="video-icon" src={IconVideo} />
					</ListItemIcon>
					<ListItemText className={classes.drawerText} disableTypography>
						videos
					</ListItemText>
				</ListItem>

				<ListItem
					key="2"
					button
					component={Link}
					to="/teacher/assignment"
					selected={value === 2}
					onClick={() => {
						setValue(2);
					}}
					className={classes.drawerItem}
				>
					<ListItemIcon>
						<img alt="assignment-icon" src={IconAssignment} />
					</ListItemIcon>
					<ListItemText className={classes.drawerText} disableTypography>
						Assignments
					</ListItemText>
				</ListItem>
				<ListItem
					key="3"
					button
					component={Link}
					to="/teacher/note"
					selected={value === 3}
					onClick={() => {
						setValue(3);
					}}
					className={classes.drawerItem}
				>
					<ListItemIcon>
						<img alt="note-icon" src={IconNote} />
					</ListItemIcon>
					<ListItemText className={classes.drawerText} disableTypography>
						Notes
					</ListItemText>
				</ListItem>

				<Typography className={classes.category} variant="subtitle1" noWrap>
					OTHERS
				</Typography>

				<ListItem
					key="4"
					button
					component={Link}
					to="/teacher/account"
					selected={value === 4}
					onClick={() => {
						setValue(4);
					}}
					className={classes.drawerItem}
				>
					<ListItemIcon>
						<img alt="setting-icon" src={IconSetting} />
					</ListItemIcon>
					<ListItemText className={classes.drawerText} disableTypography>
						Account Setting
					</ListItemText>
				</ListItem>
				<ListItem
					key="5"
					button
					component={Link}
					to="/teacher/contact"
					selected={value === 5}
					onClick={() => {
						setValue(5);
					}}
					className={classes.drawerItem}
				>
					<ListItemIcon>
						<img alt="contact-icon" src={IconContact} />
					</ListItemIcon>

					<ListItemText className={classes.drawerText} disableTypography>
						Contact us
					</ListItemText>
				</ListItem>
				<ListItem
					key="6"
					button
					component={Link}
					to="/faq"
					selected={value === 6}
					onClick={() => {
						setValue(6);
					}}
					className={classes.drawerItem}
				>
					<ListItemIcon>
						<img alt="faq-icon" src={IconFaq} />
					</ListItemIcon>
					<ListItemText className={classes.drawerText} disableTypography>
						FAQ
					</ListItemText>
				</ListItem>
			</List>
		</SwipeableDrawer>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar className={classes.appbar} position="fixed" color="primary">
					<Toolbar disableGutters>
						<Typography className={classes.logo}>Vidyalaya</Typography>
						<Tabs
							className={classes.tabs}
							value={value}
							onChange={handleChange}
							indicatorColor="transparent"
						>
							<Tab label="LOGIN" component={Link} to="/login" />
							{onMobile && (
								<IconButton
									className={classes.drawerIconContainer}
									onClick={() => setOpenDrawer(!openDrawer)}
									disableRipple
								>
									<MenuIcon className={classes.drawerIcon} />
								</IconButton>
							)}
						</Tabs>
					</Toolbar>
					{mobileDrawer}
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbar} />
		</React.Fragment>
	);
};

export default Navigation;
