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

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePageComponent />} />
            <Route path='/employees' element={<ListEmployeeComponent />} />
            <Route path='/add-employee/:id' element={<CreateEmployeeComponent />} />
            <Route path='/view-employee/:id' element={<ViewEmployeeComponent />} />
            <Route path='/projects' element={<ListProjectComponent />} />
            <Route path='/clients' element={<ListClientComponent />} />
            <Route path='/add-client/:id' element={<CreateClientComponent />} />
            <Route path='/view-client/:id' element={<ViewClientComponent />} />
            <Route path='/users' element={<ListUsersComponent />} />
            <Route path='/add-user/:id' element={<CreateUserComponent />} />
            <Route path='/view-user/:id' element={<ViewUserComponent />} />
          </Routes>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
