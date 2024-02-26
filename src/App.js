import React from 'react';
import Layout from './components/Layout';
import './App.css';
import Blog from './pages/blog';
import About from './pages/about';
import Search from './pages/search';
import Home from './pages/home';
import Settings from './pages/settings';
import Eventchange from './pages/exploreEvents/Eventchange';
import Register from './pages/register';
import Feed from './pages/feed';
import CreatePage from './pages/create/CreatePage';
import CreateBlog from './pages/blogs/CreateBlog';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';
function App() {

  return (
    <>
    <Layout></Layout>

    <div>    

<Routes>
  <Route path='/' element={<Home></Home>}>  </Route>
  <Route path='/blog' element={<Blog></Blog>}></Route>
  <Route path='/register' element={<Register></Register>}></Route>
  <Route path='/feed' element={<Feed></Feed>}></Route>
  <Route path='/events' element={<Eventchange></Eventchange>}></Route>
  <Route path='/createpost' element={<CreatePage></CreatePage>}></Route>
  <Route path='/createblog' element={<CreateBlog></CreateBlog>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/search' element={<Search></Search>}></Route>
  <Route path='/settings' element={<Settings></Settings>}></Route>
</Routes>
</div>
    </>
  );
}

export default App;
