import React from 'react'
import { connect } from 'react-redux'
import { showNote, editNoteSuccess } from '../Actions/notes'
import Background from '../images/Note.jpeg'
import { Button } from 'semantic-ui-react'

class EditNote extends React.Component {
    state = {
        title: '',
        body: '',
        id: ''
    }

    componentDidMount(){
        const { title, body, id } = this.props.note[0]
        this.setState({
            title,
            body,
            id
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch(`http://localhost:3000/notes/${this.state.id}`, reqObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.editNoteSuccess(this.state)
            this.props.history.push(`/home/showcard/${note.id}`)
        })
    }

    
    
    render(){
        const image = `url(${Background})`
        return(
            // <form>
             <form onSubmit={this.handleSubmit} style={{ flexDirection: 'column', display: 'flex', backgroundImage: image}}>
            <input className='newTitle' onChange={this.handleChange} type="text" name="title" value={this.state.title}></input><br></br><br></br>
            <textarea className='newBody' onChange={this.handleChange} name="body" value={this.state.body}></textarea>
            <Button style={{backgroundColor: 'rgba(255,248,199,0.3)'}} id='buttons' type='submit'>Submit</Button>     
        </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        note: state.notes
    }
}

const mapDispatchToProps = {
    showNote,
    editNoteSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(EditNote)