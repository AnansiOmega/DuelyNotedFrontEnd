import React from 'react'
import { Card } from 'semantic-ui-react'
import { removeNote } from '../Actions/notes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showNote } from '../Actions/notes'
import Background from '../images/Note.jpeg'

class NoteCard extends React.Component {

    
    render(){
        const myStyle = {
            color: 'black',
            textAlign: 'center',
            padding: '10px'
        }
        const image = `url(${Background})`
        const link = `/home/showcard/${this.props.note.id}`
        const {title, body} = this.props.note
        return(
            <Card style={{backgroundImage: image,
            backgroundSize: '400px 400px'}}>
            <Card.Content>
                <Link to={link}>
                    <Card.Header style={myStyle}>{title}</Card.Header>
                    <Card.Description style={myStyle}>
                        {body.length > 100 ? this.props.note.body.substring(0,100) + '...' : body}
                    </Card.Description>
                </Link>
            </Card.Content>
        </Card>               
        )
    }
}

const mapDispatchToProps = {
    removeNote,
    showNote
}

export default connect(null, mapDispatchToProps)(NoteCard)