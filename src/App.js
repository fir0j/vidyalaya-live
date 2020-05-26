import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
// import { Tabs, Tab, Toolbar } from '@material-ui/core';
import theme from './theme/Teacher.theme';
import Navigation from './common/Navigation.component';
import { TeacherClassroom } from './components/teacher/Classroom.teacher.page';
import { TeacherVideo } from './components/teacher/Video.teacher.page';
import { TeacherAssignment } from './components/teacher/Assignment.teacher.page';
import { TeacherNote } from './components/teacher/Note.Teacher.page';
import { TeacherAccount } from './components/teacher/Account.teacher.page';
import { TeacherContact } from './components/teacher/Contact.teacher.page';
import { FAQ } from './common/FAQ.page';
import { StudentClassroom } from './components/student/Classroom.student.page';
import { StudentVideo } from './components/student/Video.student.page';
import { StudentAssignment } from './components/student/Assignment.student.page';
import { StudentNote } from './components/student/Note.student.page';

function App() {
	// const Homepage = () => (
	// 	<Toolbar>
	// 		<Tabs>
	// 			<Tab label="Login" component={Link} to="/login" />
	// 			<Tab label="Teacher" component={Link} to="/teacher/classroom" />
	// 			<Tab label="Student" component={Link} to="/student/classroom" />
	// 		</Tabs>
	// 	</Toolbar>
	// );

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route exact path="/teacher/classroom" component={() => <TeacherClassroom />} />
					<Route exact path="/teacher/video" component={() => <TeacherVideo />} />
					<Route exact path="/teacher/assignment" component={() => <TeacherAssignment />} />
					<Route exact path="/teacher/note" component={() => <TeacherNote />} />
					<Route exact path="/student/classroom" component={() => <StudentClassroom />} />
					<Route exact path="/student/video" component={() => <StudentVideo />} />
					<Route exact path="/student/assignment" component={() => <StudentAssignment />} />
					<Route exact path="/student/note" component={() => <StudentNote />} />
					<Route exact path="/teacher/account" component={() => <TeacherAccount />} />
					<Route exact path="/teacher/contact" component={() => <TeacherContact />} />
					<Route exact path="/faq" component={() => <FAQ />} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
