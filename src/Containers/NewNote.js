import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../Actions/notes'
import Background from '../images/Note.jpeg'
import { Button } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class NewNote extends React.Component {
    state = {
        title: '',
        body: '',
        category: '',
        user_id: ''
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

    componentDidMount(){
        this.setState({
            user_id: this.props.user.id
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
             <form className='form' onSubmit={this.handleSubmit}  style={{ height: '100vh', backgroundImage: image, margin: '50px', padding: '2%', border: 'solid black 3px'}}>
                <input className='newTitle' placeholder="Title" onChange={this.handleTitle} type="text" name="title" value={this.state.title}></input><br></br><br></br>
                <ReactQuill formats={this.formats} modules={this.modules} style={{height: '48vh'}} className='newBody' placeholder="Body" onChange={this.handleBody} name="body" value={this.state.body}/>
                <input style={{marginTop: '60px'}} className='newBody' placeholder='category' onChange={this.handleCategory} type='text' name='category' value={this.state.category}></input>
                <Button style={{backgroundColor: 'rgba(0,166,124,0.3)', marginLeft: '1150px'}} id='buttons' type='submit'>Submit</Button>     
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        user: state.auth
    }
}


const mapDispatchToProps = {
    addNote
}

export default connect( mapStateToProps, mapDispatchToProps )(NewNote)