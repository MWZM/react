import UserSelect from "./Userselect"
import Breadcrumbs from "./Breadcrumb"

import '../style/nav.scss'

const Nav = () => {
  return (
    <nav>
      <Breadcrumbs/>
      <UserSelect/>
    </nav>
  )
}

export default Nav