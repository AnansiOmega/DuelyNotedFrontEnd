import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { showNote } from '../Actions/notes'
import { removeNote } from '../Actions/notes'
import { connect } from 'react-redux'
import Background from '../images/Note.jpeg'

class ShowCard extends React.Component {


    componentDidMount(){
        this.props.showNote(this.props.match.params.id)
    }

    handleDelete = () => {
        this.props.removeNote(this.props.note.id)

        fetch(`http://localhost:3000/notes/${this.props.note[0].id}`, { method: 'DELETE' })

        this.props.history.push('/home')
    }


    render(){
        const image = `url(${Background})`
        const editLink = `/home/editnote/${this.props.note[0].id}`
        return(
            <div style={{ flexDirection: 'column', display: 'flex', backgroundImage: image, margin: '50px', padding: '2%', border: 'solid black 3px'}}>
            <div id='buttons'>
            </div>
                <h1 className='showTitle'>{this.props.note[0].title}</h1>
                <pre className='showBody'>
                    {this.props.note[0].body}
                </pre>
            <div className='buttonDiv'>
                <Link to={editLink}>
                <Button basic color='black'>
                    Edit
                </Button>
                </Link>
                <Button onClick={this.handleDelete} basic color='red'>
                    X
                </Button>
            </div>
            </div>         
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.notes
    }
}

const mapDispatchToProps = {
    removeNote,
    showNote
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard)