import React from 'react'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../Actions/notes'
import NoteCard from '../Components/NoteCard'
import { Card} from 'semantic-ui-react'


class NotesCont extends React.Component {

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.user.id}`)
        .then(resp => resp.json())
        .then(user => {
            const notes = user.notes
            this.props.fetchNotesSuccess(notes)
        })
    }

    renderNotes = () => {
        let notes = this.props.notes.filter(notes => notes.category.toLowerCase().includes(this.props.search.toLowerCase()))
        return notes.map(note => {
           return <NoteCard note={note} key={note.id}/>
        })    
    }

    render(){
        return(
            <div className='cardCont'>
            <Card.Group>{this.renderNotes()}</Card.Group>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        search: state.search,
        user: state.auth
    }
}

const mapDispatchToProps = {
    fetchNotesSuccess
}




export default connect(mapStateToProps, mapDispatchToProps)(NotesCont)