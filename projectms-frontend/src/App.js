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
import ListTickets from './components/tickets/ListTickets';
import LoginComponent from './components/login/LoginComponent';
import CreateTicket from './components/tickets/CreateTicket';
import PrivateRoute from './components/privateRoute';
import ClientHomePageComponent from './components/ClientHomePageComponent';
import AdminRolePrivateRoute from './components/privateRoute/adminRole';



function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className='container'>
          <Routes>
            {/* homepage */}
            <Route path='/homepage'
              element={
                <PrivateRoute>
                  <HomePageComponent />
                </PrivateRoute>
              } />

            {/* Clienthomepage */}
            <Route path='/clientHomepage'
              element={
                <PrivateRoute>
                  <ClientHomePageComponent />
                </PrivateRoute>
              } />

            {/* Employee */}
            <Route path='/employees'
              element={
                <PrivateRoute>
                  <AdminRolePrivateRoute>
                    <ListEmployeeComponent />
                  </AdminRolePrivateRoute>
                </PrivateRoute>} />
            <Route path='/:id&employeeAdd=:add'
              element={
                <PrivateRoute>
                  <CreateEmployeeComponent />
                </PrivateRoute>
              } />
            <Route path='/:id&employeeView=:view'
              element={

                <ViewEmployeeComponent />

              } />
            {/* Project */}
            <Route path='/projects'
              element={

                <ListProjectComponent />

              } />
            <Route path='/:id&projectAdd=:add'
              element={

                <CreateProjectComponent />

              } />
            <Route path='/:id&viewProject=:view'
              element={

                <ViewProjectComponent />

              } />
            {/* Client */}
            <Route path='/clients' element={
              <PrivateRoute>
                <ListClientComponent />
              </PrivateRoute>
            } />
            <Route path='/:id&clientAdd=:add' element={

              <CreateClientComponent />

            } />
            <Route path='/:id&clientView=:view' element={

              <ViewClientComponent />

            } />
            {/* User */}
            <Route path='/users' element={

              <ListUsersComponent />

            } />
            <Route path='/:id' element={

              <CreateUserComponent />

            } />
            <Route path='/:id&viewUser=:view' element={

              <ViewUserComponent />

            } />
            {/* Task */}
            <Route path='/tasks' element={

              <ListTaskComponent />

            } />
            <Route path='/:id&taskAdd=:add' element={

              <CreateTaskComponent />

            } />
            <Route path='/:id&viewTask=:view' element={

              <ViewTaskComponent />

            } />
            {/* Calendar */}
            <Route path='/calendar' element={

              <CalendarComponent />

            } />
            {/* Chat Room */}
            <Route path='/chatroom' element={

              <ChatRoom />

            } />
            {/* Gantt */}
            <Route path='/gantt' element={

              <GanttExport />

            } />
            {/* Tickets */}
            <Route path='/tickets' element={<ListTickets />} />
            <Route path='/:id&ticketAdd=:add' element={<CreateTicket />} />
            {/* <Route path='/add-ticket' element={<CreateTicket />} /> */}
            {/* <Route path='/edit-ticket/:id' element={<CreateTicket />} /> */}
            {/* Login */}
            <Route path='/' element={<LoginComponent />} />
          </Routes>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
