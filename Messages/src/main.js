import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import messages from './messages.json';
import './main.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='link-container'>
          <Link className='link' to={'/'}>About</Link>
          <Link className='link' to={'/messages'}>Messages</Link>
        </div>
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/messages' component={Messages} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return(
    <div>Sorry but page you are requesting for is not found</div>
  )
}

function About() {
  return(
    <div>This is about page</div>
  )
}

function Messages() {
  return(
    <div className='messages-container'>
      <div className='message-links-container'>
        {messages.map(message => <div key={message._id}><Link className='message-links' to={`/messages/${message._id}`}>{`Message ${message.index + 1}`}</Link></div>)}
      </div>
      <div className='message'>
      <Route path='/messages/:id' component={Message} />
      </div>
    </div>
  )
}

function Message(props) {
  const message = messages.find(message => message._id === props.match.params.id);
  return(
    <div>
      <div>From: {message.email}</div>
      <div>{message.message}</div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));