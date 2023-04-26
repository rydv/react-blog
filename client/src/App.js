import Topbar from './components/topbar/topbar'
import Home from "./pages/Home/Home"
import Single from './pages/single/single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  const user=false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/register" Component={user ? Home : Register }/>
        <Route path="/login" Component={user ? Home : Login}/>
        <Route path="/write" Component={user ? Write : Register}/>
        <Route path="/settings" Component={user ? Settings : Register}/>
        <Route path="/post/:postId" Component={Single}/>
      </Routes>
    </Router>
  );
}

export default App;
