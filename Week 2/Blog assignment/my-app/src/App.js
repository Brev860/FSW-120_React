import React from 'react';
import './App.css';
import Header from './header'
import Nav from './nav'
import BlogsComponent from './bloglist'
import blogList from './blogdata'
import BlogPost from './blogposts'
import Footer from './footer'






function App() {

  const blogComponents = blogList.map(blog => <BlogsComponent title={blog.title} subtitle={blog.subTitle} author={blog.author} date={blog.date} />)
  return (
    <div>
       <Header />
         <Nav/>
       {blogComponents}
         <BlogPost/>
       <Footer/>
    </div>
  );
}

export default App;
