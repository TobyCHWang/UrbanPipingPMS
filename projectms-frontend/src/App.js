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
import AdminAndEmployeeRolePrivateRoute from './components/privateRoute/adminAndEmployee';
import AccessFalseComponent from './components/warning/AcessFalsePage';



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
                    <AdminAndEmployeeRolePrivateRoute>
                    <ListEmployeeComponent />
                    </AdminAndEmployeeRolePrivateRoute>
                </PrivateRoute>} />
            <Route path='/:id&employeeAdd=:add'
              element={
                <PrivateRoute>
                  <AdminRolePrivateRoute>
                    <CreateEmployeeComponent />
                  </AdminRolePrivateRoute>
                </PrivateRoute>
              } />
            <Route path='/:id&employeeView=:view'
              element={
                <PrivateRoute>
                <AdminAndEmployeeRolePrivateRoute>
                <ViewEmployeeComponent />
                </AdminAndEmployeeRolePrivateRoute>
                </PrivateRoute>
              } />
            {/* Project */}
            <Route path='/projects'
              element={
                <PrivateRoute>
                  <AdminAndEmployeeRolePrivateRoute>
                <ListProjectComponent />
                </AdminAndEmployeeRolePrivateRoute>
                </PrivateRoute>
              } />
            <Route path='/:id&projectAdd=:add'
              element={
                <PrivateRoute>
                <AdminAndEmployeeRolePrivateRoute>
                <CreateProjectComponent />
                </AdminAndEmployeeRolePrivateRoute>
                </PrivateRoute>
              } />
            <Route path='/:id&viewProject=:view'
              element={
                <PrivateRoute>
                <ViewProjectComponent />
                </PrivateRoute>
              } />
            {/* Client */}
            <Route path='/clients' element={
              <PrivateRoute>
                <AdminAndEmployeeRolePrivateRoute>
                <ListClientComponent />
                </AdminAndEmployeeRolePrivateRoute>
              </PrivateRoute>
            } />
            <Route path='/:id&clientAdd=:add' element={
              <PrivateRoute>
                 <AdminRolePrivateRoute>
                  <CreateClientComponent />
              </AdminRolePrivateRoute>
              </PrivateRoute>
            } />
            <Route path='/:id&clientView=:view' element={
              <PrivateRoute>
                <AdminAndEmployeeRolePrivateRoute>
              <ViewClientComponent />
              </AdminAndEmployeeRolePrivateRoute>
              </PrivateRoute>
            } />
            {/* User */}
            <Route path='/users' element={
              <PrivateRoute>
               <AdminRolePrivateRoute>
                <ListUsersComponent />
              </AdminRolePrivateRoute>
              </PrivateRoute>
            } />
            <Route path='/:id' element={
              <PrivateRoute>
               <AdminRolePrivateRoute>
              <CreateUserComponent />
              </AdminRolePrivateRoute>
              </PrivateRoute>
            } />
            <Route path='/:id&viewUser=:view' element={
              <PrivateRoute>
              <AdminRolePrivateRoute>
              <ViewUserComponent />
              </AdminRolePrivateRoute>
              </PrivateRoute>
            } />
            {/* Task */}
            <Route path='/tasks' element={
              <PrivateRoute>
                <AdminAndEmployeeRolePrivateRoute>
              <ListTaskComponent />
              </AdminAndEmployeeRolePrivateRoute>
              </PrivateRoute>
            } />
            <Route path='/:id&taskAdd=:add' element={
              <PrivateRoute>
                <AdminAndEmployeeRolePrivateRoute>
              <CreateTaskComponent />
              </AdminAndEmployeeRolePrivateRoute>
              </PrivateRoute>
            } />
            <Route path='/:id&viewTask=:view' element={
              <PrivateRoute>
              <ViewTaskComponent />
              </PrivateRoute>
            } />
            {/* Calendar */}
            <Route path='/calendar' element={
              <PrivateRoute>
              <CalendarComponent />
              </PrivateRoute>
            } />
            {/* Chat Room */}
            <Route path='/chatroom' element={
              <PrivateRoute>
                <AdminAndEmployeeRolePrivateRoute>
              <ChatRoom />
              </AdminAndEmployeeRolePrivateRoute>
              </PrivateRoute>
            } />
            {/* Gantt */}
            <Route path='/gantt' element={
              <PrivateRoute>
              <GanttExport />
              </PrivateRoute>
            } />
            {/* Tickets */}
            <Route path='/tickets' element={
            <PrivateRoute>
            <ListTickets />
            </PrivateRoute>
            } />
            <Route path='/:id&ticketAdd=:add' element={
            <PrivateRoute>
            <CreateTicket />
            </PrivateRoute>
            } />
            {/* <Route path='/add-ticket' element={<CreateTicket />} /> */}
            {/* <Route path='/edit-ticket/:id' element={<CreateTicket />} /> */}
            {/* Login */}
            <Route path='/' element={<LoginComponent />} />
            <Route path='/acessFasle' element={<AccessFalseComponent/>} />
          </Routes>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
