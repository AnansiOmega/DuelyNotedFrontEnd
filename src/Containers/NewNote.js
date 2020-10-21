import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../Actions/notes'
import Background from '../images/Note.jpeg'
import { Button } from 'semantic-ui-react'

class NewNote extends React.Component {
    state = {
        title: '',
        body: '',
        user_id: 1
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.addNote(note)
            this.props.history.push('/home')
        })
    }

    render(){
        const image = `url(${Background})`
        return(
             <form onSubmit={this.handleSubmit}  style={{backgroundImage: image, margin: '50px', padding: '2%', border: 'solid black 3px'}}>
                <input className='newTitle' placeholder="Title" onChange={this.handleChange} type="text" name="title" value={this.state.title}></input><br></br><br></br>
                <textarea className='newBody' placeholder="Body" onChange={this.handleChange} name="body" value={this.state.body}></textarea>
                <Button style={{backgroundColor: 'rgba(255,248,199,0.3)', marginLeft: '1150px'}} id='buttons' type='submit'>Submit</Button>     
            </form>
        )
    }
}

// className='showTitle'>
// lassName='showBody'>

const mapStateToProps = state => {
    return {
        note: state.note
    }
}


const mapDispatchToProps = {
    addNote
}

export default connect( mapStateToProps, mapDispatchToProps )(NewNote)