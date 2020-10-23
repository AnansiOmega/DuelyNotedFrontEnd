import React from 'react'
import NotesCont from './NotesCont'
import { Switch, Route } from 'react-router-dom'
import EditNote from './EditNote'
import ShowCard from './ShowCard'
import { connect } from 'react-redux'
import { currentUser } from '../Actions/auth'


class Home extends React.Component {

componentDidMount(){
    const token = localStorage.getItem('myToken')
    if(!token){
        this.props.history.push('/')
    } else {
        const reqObj = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        fetch('http://localhost:3000/current_user', reqObj)
        .then(resp => resp.json())
        .then(user => {
            if(user.error){
                this.props.history.push('/')
            } else {
                this.props.currentUser(user)
            }
        })
    }
}

    render(){
        return(
            <div>
                <Switch>
                <Route exact path='/home' component={NotesCont}/>
                <Route path='/home/editnote/:id' component={EditNote}/>
                <Route path='/home/showcard/:id' component={ShowCard}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        auth: state.auth
    }
}

const mapDispatchToProps = {
    currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)