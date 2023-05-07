import {Link} from "react-router-dom"

function NavbarComponent() {
  return (
    <navbar>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </navbar>
  )
}

export default NavbarComponent
