import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import HomePageComponent from './components/HomePageComponent';
import ListProjectComponent from './components/ListProjectComponent';
import ListClientComponent from './components/ListClientComponent';
import CreateClientComponent from './components/CreateClientComponent';
import ViewClientComponent from './components/ViewClientComponent';
import ListUsersComponent from './components/ListUsersComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import ListTaskComponent from './components/ListTaskComponent';
import ViewTaskComponent from './components/ViewTaskComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import ViewProjectComponent from './components/ViewProjectComponent';
import CreateProjectComponent from './components/CreateProjectComponent';
import CalendarComponent from './components/CalendarComponent';

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
          </Routes>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
