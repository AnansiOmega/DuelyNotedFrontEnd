import React from 'react'
import NotesCont from './NotesCont'
import { Switch, Route } from 'react-router-dom'
import EditNote from './EditNote'
import ShowCard from './ShowCard'


class Home extends React.Component {



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

export default Home