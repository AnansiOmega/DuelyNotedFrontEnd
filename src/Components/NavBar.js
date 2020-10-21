import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class NavBar extends React.Component{

    render(){
        return(
            <Menu>
                <Link to='/home'>
                    <Menu.Item>
                        Home
                    </Menu.Item>
                </Link>       
                <Link to='/newnote'>
                    <Menu.Item>
                        New Note
                    </Menu.Item>
                </Link>
            <Menu.Menu position='right'>
                <Link to='/'>
                    <Menu.Item>
                        Logout
                    </Menu.Item>
                </Link>
            </Menu.Menu>
          </Menu>
        )
    }
}

export default NavBar