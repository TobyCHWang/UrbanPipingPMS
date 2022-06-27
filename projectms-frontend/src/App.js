import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FooterComponent from './components/global/FooterComponent';
import HeaderComponent from './components/global/HeaderComponent';
import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import CreateEmployeeComponent from './components/employee/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/employee/ViewEmployeeComponent';
import HomePageComponent from './components/HomePageComponent';
import ListProjectComponent from './components/project/ListProjectComponent';
import ListClientComponent from './components/client/ListClientComponent';
import CreateClientComponent from './components/client/CreateClientComponent';
import ViewClientComponent from './components/client/ViewClientComponent';
import ListUsersComponent from './components/user/ListUsersComponent';
import CreateUserComponent from './components/user/CreateUserComponent';
import ViewUserComponent from './components/user/ViewUserComponent';
import ListTaskComponent from './components/task/ListTaskComponent';
import ViewTaskComponent from './components/task/ViewTaskComponent';
import CreateTaskComponent from './components/task/CreateTaskComponent';
import ViewProjectComponent from './components/project/ViewProjectComponent';
import CreateProjectComponent from './components/project/CreateProjectComponent';
import CalendarComponent from './components/calendar/CalendarComponent';


import ChatRoom from './components/message/ChatRoom';

import GanttExport from './components/gantt/GanttExport';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePageComponent />} />
            {/* Employee */}
            <Route path='/employees' element={<ListEmployeeComponent />} />
            <Route path='/add-employee/:id' element={<CreateEmployeeComponent />} />
            <Route path='/view-employee/:id' element={<ViewEmployeeComponent />} />
            {/* Project */}
            <Route path='/projects' element={<ListProjectComponent />} />
            <Route path='/add-project/:id' element={<CreateProjectComponent />} />
            <Route path='/view-project/:id' element={<ViewProjectComponent />} />
            {/* Client */}
            <Route path='/clients' element={<ListClientComponent />} />
            <Route path='/add-client/:id' element={<CreateClientComponent />} />
            <Route path='/view-client/:id' element={<ViewClientComponent />} />
            {/* User */}
            <Route path='/users' element={<ListUsersComponent />} />
            <Route path='/add-user/:id' element={<CreateUserComponent />} />
            <Route path='/view-user/:id' element={<ViewUserComponent />} />
            {/* Task */}
            <Route path='/tasks' element={<ListTaskComponent />} />
            <Route path='/add-task/:id' element={<CreateTaskComponent />} />
            <Route path='/view-task/:id' element={<ViewTaskComponent />} />
            {/* Calendar */}
            <Route path='/calendar' element={<CalendarComponent />} />
            <Route path='/chatroom' element={<ChatRoom/>}/>

            {/* Gantt */}
            <Route path='/gantt' element={<GanttExport/>}/>
          </Routes>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
