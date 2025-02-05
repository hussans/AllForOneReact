import { Navbar } from "flowbite-react"
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {

    return (

        <Navbar className="flex justify-between bg-transparent text-white !px-24 py-5 xs:!px-5 md:!px-20 lg:!px-32 z-50">
            <NavLink className="hover:text-[#E93635] active:text-red-50" to="/" > sangames </NavLink>
            <NavLink className="hover:text-[#E93635] active:text-red-50" to="/menu-page"> menu </NavLink>
        </Navbar>
        
    )
}

export default NavbarComponent