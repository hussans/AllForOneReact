import { Navbar } from "flowbite-react"
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {

    return (
        <div>
            <Navbar>
                <Navbar.Brand to="/">
                    sangames
                </Navbar.Brand>
                <Navbar.Collapse>
                    <NavLink> menu </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent