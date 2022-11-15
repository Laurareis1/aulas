import {Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout () {
return<>   <nav>
<Link to ='/'>All</Link>
 <Link to ='/images'>Images</Link>
 <Link to ='/videos'>Videos</Link>
 <Link to='/counter'>Counter</Link>
 <Link to='/newpage'>Newpage</Link>
 <Link to='/contacto'>contacto</Link><br />
 <Link to='/table'>table</Link><br />
</nav>
    <div className='midle-section'>
            <aside>
                <Link to='/'>All</Link><br />
                <Link to='/images'>Images</Link><br />
                <Link to='/videos'>Videos</Link><br />
                <Link to='/counter'>Counter</Link><br />
                <Link to='/newpage'>Newpage</Link><br />
                <Link to='/contacto'>contacto</Link><br />
                <Link to='/table'>table</Link><br />
            </aside>

            <div className="content">
                <Outlet />
            </div>

        </div>

        <footer>adfdas</footer>
 </>
}
export default Layout;
