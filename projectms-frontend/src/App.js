import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import HomePageComponent from './components/HomePageComponent';
import ListProjectComponent from './components/ListProjectComponent';
import ListTaskComponent from './components/ListTaskComponent';
import ViewTaskComponent from './components/ViewTaskComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import ViewProjectComponent from './components/ViewProjectComponent';
import CreateProjectComponent from './components/CreateProjectComponent';
import CalebdarComponent from './components/CalebdarComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePageComponent />}/>
            {/* employee */}
            <Route path='/employees' element={<ListEmployeeComponent />}/>
            <Route path='/add-employee/:id' element={<CreateEmployeeComponent />}/>
            <Route path='/view-employee/:id' element={<ViewEmployeeComponent />}/>
            {/* project */}
            <Route path='/projects' element={<ListProjectComponent/>}/>
            <Route path='/add-project/:id' element={<CreateProjectComponent/>}/>
            <Route path='/view-project/:id' element={<ViewProjectComponent/>}/>
            {/* task */}
            <Route path='/tasks' element={<ListTaskComponent/>}/>
            <Route path='/add-task/:id' element={<CreateTaskComponent/>}/>
            <Route path='/view-task/:id' element={<ViewTaskComponent/>}/>
            
            {/* /calendar */}
            <Route path='/calendar' element={<CalebdarComponent/>}/>
          </Routes>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
