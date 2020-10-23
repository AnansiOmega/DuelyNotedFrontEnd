import React from 'react'
import { Button, Form } from 'semantic-ui-react'


class Signup extends React.Component {
    state = {
        username: ''
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
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
        })
        this.props.history.push('/home')
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input name='username' onChange={this.handleChange} placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name='password' onChange={this.handleChange} placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Signup</Button>
          </Form>
        )
    }
}

export default Signup
