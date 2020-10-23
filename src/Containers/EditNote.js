import React from 'react'
import { connect } from 'react-redux'
import { showNote, editNoteSuccess } from '../Actions/notes'
import Background from '../images/Note.jpeg'
import { Button } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class EditNote extends React.Component {
    state = {
        title: '',
        body: '',
        category: '',
        id: ''
    }

    componentDidMount(){
        const { title, body, id, category } = this.props.note[0]
        this.setState({
            title,
            body,
            category,
            id
        })
    }
    
   
    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    
    handleBody = (e) => {
        this.setState({
            body: e
        })
    }

    handleCategory = (e) => {
        this.setState({
            category: e.target.value
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

    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean'], ['code-block']
        ],
      }
     
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'code-block'
      ]
    
    
    
    render(){
        const image = `url(${Background})`
        return(

             <form onSubmit={this.handleSubmit} style={{ flexDirection: 'column', display: 'flex', backgroundImage: image, margin: '50px', padding: '2%', border: 'solid black 3px'}}>
            <input style={{marginLeft: '0px'}} className='newTitle' onChange={this.handleTitle} type="text" name="title" value={this.state.title}></input><br></br><br></br>
            <ReactQuill formats={this.formats} modules={this.modules} style={{height: '48vh'}} className='newBody' onChange={this.handleBody} name="body" value={this.state.body}/>
            <input style={{marginTop: '60px'}} className='newBody' placeholder='category' onChange={this.handleCategory} type='text' name='category' value={this.state.category}></input>
            <Button style={{backgroundColor: 'rgba(255,248,199,0.3)',  marginLeft: '1150px'}} id='buttons' type='submit'>Submit</Button>     
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