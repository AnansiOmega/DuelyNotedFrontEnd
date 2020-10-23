import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterNotes } from '../Actions/search'
import { logoutSuccess } from '../Actions/auth'

class NavBar extends React.Component {

    handleChange = event => {
     event.persist()
     this.props.filterNotes(event)
    }

    handleLogout = () => {
        localStorage.removeItem('myToken')
        this.props.logoutSuccess()
    }

    

    render(){
        const myStyle = {
            borderTopStyle: 'hidden',
            borderRightStyle: 'hidden',
            borderLeftStle: 'hidden',
            borderBottomStyle: 'hidden',
            borderLeftStyle: 'hidden',
            width: '80vw',
            textAlign: 'center'
        }
        const notes = this.props.notes || []
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
                    {notes.length > 2 && <input style={myStyle} placeholder="Please type in a category you'd like to search by" type='text' onChange={this.handleChange}></input>}
                    {
                        this.props.auth.id
                        ?
            <Menu.Menu position='right'>
                <Link to='/' onClick={this.handleLogout}>
                    <Menu.Item>
                        Logout
                    </Menu.Item>
                </Link>
            </Menu.Menu>
            :
            <Menu.Menu position='right'>
                <Link to='/'>
                    <Menu.Item>
                        Login
                    </Menu.Item>
                </Link>
            </Menu.Menu>


                    }
          </Menu>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        auth: state.auth
    }
}

const mapDispatchToProps = {
    filterNotes,
    logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)