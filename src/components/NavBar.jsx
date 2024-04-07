import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseCircleFill } from "react-icons/ri";

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Contact', path: '/contact' }
      ];
      const[open,setOpen]=useState(false);

    return (
        <nav className="bg-yellow-500">
           <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
            {
                open===true? 
                <RiCloseCircleFill> </RiCloseCircleFill>
                :<CiMenuFries></CiMenuFries>
            }
           
           </div>
                
                {/* why? */}

           {/* <ul className={`md:flex  duration-1000 absolute justify-around bg-yellow-400 mb-3 px-6 md: static
            ${open?'top-8':'-top-60'}
           `}> */}

        <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16': '-top-60'}
            bg-yellow-200 px-6`}>
           {
                routes.map(route => <li className="mr-16 hover:bg-blue-800" key={route.id}>
                    <a href={route.path}>{route.name}</a>
                    </li>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;