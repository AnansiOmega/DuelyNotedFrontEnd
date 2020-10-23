import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { fetchUserSuccess } from '../Actions/auth'
import { connect } from 'react-redux'


class Signup extends React.Component {
    state = {
        username: '',
        password: ''
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
                'Content-type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(user => {
                const reqObj = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                }
            
                fetch('http://localhost:3000/auth', reqObj)
                .then(resp => resp.json())
                .then(user => {
                    if(user.error){
                        this.setState({
                            error: user.error
                        })
                    } else {
                        localStorage.setItem('myToken', user.token)
                        this.props.fetchUserSuccess(user)
                        this.props.history.push('/home')
                    }
                })
        })
    }

    render(){
        return(
            <Form className='login' onSubmit={this.handleSubmit}>
            <Form.Field>
            <label>Username:</label>
              <input style={{backgroundColor: 'rgba(255,248,199,0.3)'}} name='username' onChange={this.handleChange} placeholder='Username' />
            </Form.Field>
            <Form.Field>
            <label>Password:</label>
              <input style={{backgroundColor: 'rgba(255,248,199,0.3)'}} type='password' name='password' onChange={this.handleChange} placeholder='Password' />
            </Form.Field>
            <Button style={{backgroundColor: 'rgba(255,248,199,0.3)'}} type='submit'>Signup</Button>
          </Form>
        )
    }
}

const mapDispatchToProps = {
    fetchUserSuccess
}


export default connect(null, mapDispatchToProps)(Signup)
