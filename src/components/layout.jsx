import React from "react";
import { Link } from "gatsby";


const Layout = (props) => {
  const pageTitle = props.pageTitle;
  const children = props.children;

  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;
