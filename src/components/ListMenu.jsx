import { MdOutlinePeopleAlt } from "react-icons/md"; 
import { MdOutlineReorder } from "react-icons/md"; 
import { BiHome } from "react-icons/bi"; 
import { BiError } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function ListMenu (){
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return(
        <div id="sidebar-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <NavLink id="menu-1" to="/" className={menuClass}><BiHome className="mr-4 text-xl"/> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink id="menu-2" to="/orders" className={menuClass}><MdOutlineReorder className="mr-4 text-xl"/> Orders</NavLink>
                </li>
                <li>
                    <NavLink id="menu-3" to="/customers" className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/> Customers</NavLink>
                </li>
                <li>
                    <NavLink id="menu-4" to="/Error400" className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/> Eror400</NavLink>
                </li>
                <li>
                    <NavLink id="menu-5" to="/Error401" className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/> Eror401</NavLink>
                </li>
                <li>
                    <NavLink id="menu-6" to="/Error403" className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/> Eror403</NavLink>
                </li>
                <li>
                    <NavLink id="menu-7" to="/UserList" className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/> User List </NavLink>
                </li>
                <li>
                    <NavLink id="notes" to="/notes" className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/> notes </NavLink>
                </li>
            </ul>
        </div>
    )
}
