import React from 'react'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../Actions/notes'
import NoteCard from '../Components/NoteCard'
import { Card, Image } from 'semantic-ui-react'


class NotesCont extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(notes => {
            this.props.fetchNotesSuccess(notes)
        })
    }

    renderNotes = () => {
        return this.props.notes.map(note => {
           return <NoteCard note={note} key={note.id}/>
        })    
    }

    render(){
        return(
            <Card.Group>{this.renderNotes()}</Card.Group>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = {
    fetchNotesSuccess
}




export default connect(mapStateToProps, mapDispatchToProps)(NotesCont)