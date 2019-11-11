import React, { Component } from 'react';
import Users from './Users';
import Blogs from './Blogs';
import Errormessage from './Errormessage';
import Logout from './Logout';
import { checkUsers, login, logout, checkBlogs, addBlogs, addNewUsers, deleteBlogs } from './services';

import './blog.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus:false,
      username:'',
      title:'',
      text:'',
      users:  {
      },
      newUsers:'',
      blogs: {
      },
      errorinfo:'' 
    };
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleBlogs = this.handleBlogs.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleNewUser = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleNewRegistration = (e) => {
    this.setState({
      newUsers: e.target.value
    })
  }

  handleRegistration = (e) => {
    console.log(this.state.newUsers);
    addNewUsers({newUsers: this.state.newUsers})
    .then(res => {
      this.setState(
        {
          newUsers:''
        });
    })
    .catch(err => {
      console.log(this.state.errorinfo);
      this.setState({ newUsers:'', errorinfo: err.code});
      
    });
  }

  handleLogin = (e) => {
    console.log(this.state.username);
    login({username: this.state.username})
    .then(res => {
      this.setState(
        {
          loginStatus: true
        });
        console.log(this.state.username);
        console.log(this.state.loginStatus);
        this.refresh();
    })
    .catch(err => {
      console.log(this.state.errorinfo);
      this.setState({ errorinfo: err.code, username:''});
      
    });
  }

  handleLogout = (e) => {
    logout({username: this.state.username})
    .then(res => {
      this.setState(
        {
          loginStatus: false,
          username:''
        });
        this.handleUser();
    })
    .catch(err => {
      this.setState({ errorinfo: err.code})
    });
    
  }

  handleDelete = (id) => {
    console.log(id);
    deleteBlogs({id:id, username: this.state.username})
    .then(res => {
        this.handleBlogs();
    })
    .catch(err => {
      this.setState({ errorinfo: err.code})
    });
  }

  handleEnterKey = (e) => {
    if(e.nativeEvent.keyCode === 13){
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if(this.state.text && this.state.title) {
      console.log(this.state.text);
      console.log(this.state.title);
      addBlogs({ sender: this.state.username, title:this.state.title, text: this.state.text })
      .catch(err => {
        this.setState({errorinfo: err.code, title: '', text: ''})
      });
    }
    this.handleBlogs();
  }

  handleUser = () => {
    checkUsers()
    .then(res => {
      this.setState(
        {
          users: res,
          errorinfo:''
        })
    })
    .catch(err => {
      this.setState({ errorinfo: err.code})
    });
  }

  handleBlogs = () => {
    checkBlogs()
    .then(res => {
      this.setState(
        {
          title:'',
          text:'',
          blogs: res,
          errorinfo:''
        })
    })
    .catch(err => {
      this.setState({ errorinfo: err.code})
    });
  }

	refresh = () => {
		this.handleUser();
		this.handleBlogs();
  }
  
  refreshWithoutChangeText = () => {
		checkUsers()
    .then(res => {
      this.setState(
        {
          users: res,
        })
    })
    .catch(err => {
      this.setState({ errorinfo: err.code})
    });
		checkBlogs()
    .then(res => {
      this.setState(
        {
          blogs: res,
        })
    })
    .catch(err => {
      this.setState({ errorinfo: err.code})
    });
	}

	componentDidMount() {
		this.interval = setInterval(() => this.refreshWithoutChangeText(), 5000);
	}

  render() {
    if(!this.state.loginStatus) {
        return (
        <div className="chat-app">
          <div className="display-panel">
          <div className="frame-work">Welcome to this public blog! Please sign up and login!</div>
          <div className="input-username">
            <span>Please input your username: </span>
              <input value={this.state.username} onChange={this.handleNewUser.bind(this)} ref={myInput=>this.myInput=myInput}/>
            <button onClick={this.handleLogin.bind(this)} disabled={!this.state.username}>Login</button>
          </div>
          <div className="input-registration">
            <span>Or free register: </span>
            <input value={this.state.newUsers} onChange={this.handleNewRegistration.bind(this)}/>
            <button onClick={this.handleRegistration.bind(this)}>Register</button>
          </div>   
          </div>
          <Errormessage errorinfo={this.state.errorinfo} />
        </div>
      );
    } else {
      return (
        <div className="chat-app">
          <div className="display-panel">
            <Users users={this.state.users}/>
            <Blogs blogs={this.state.blogs} handleDelete={this.handleDelete.bind(this)}/>
          </div>
          <div className="outgoing">
            <div>
              <p>New blog's title:</p>
              <input className="new-title" value={this.state.title} onChange={this.handleTitle.bind(this)}/>
            </div>
            <div className="content-text">
              <p>New blog's content:</p>
              <input className="new-content" value={this.state.text} onChange={this.handleText.bind(this)} onKeyPress={this.handleEnterKey}/>
              <button onClick={this.handleSubmit} disabled={!this.state.text||!this.state.title}>Send</button>
            </div>
          </div>
              <Logout handleLogout={this.handleLogout} />
          <Errormessage errorinfo={this.state.errorinfo} />
        </div>
      );  
    }
  }
}

export default App;

