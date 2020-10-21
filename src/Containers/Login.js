import React from 'react'


class Login extends React.Component {
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
        this.props.history.push('/home')
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <label>Username:</label>
                <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Login