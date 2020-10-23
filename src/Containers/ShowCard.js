import React from 'react'
import { Button} from 'semantic-ui-react'
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

    renderBody = () => {
        const body = this.props.note[0].body
        return <div className='showBody' dangerouslySetInnerHTML={{ __html: body }}></div>
        
    }

    render(){
        const image = `url(${Background})`
        const editLink = `/home/editnote/${this.props.note[0].id}`
        return(
            <div style={{ flexDirection: 'column', display: 'flex', backgroundImage: image, margin: '50px', padding: '2%', border: 'solid black 3px'}}>
            <div id='buttons'>
                <h4 style={{marginLeft: '10px'}}>Category: {this.props.note[0].category}</h4>
            </div>
                <h1 className='showTitle'>{this.props.note[0].title}</h1>
                {this.renderBody()}
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