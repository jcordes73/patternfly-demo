import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div style={{padding: '0 20px'}}>
<header className="page-header">
<h2>
Horizontal Form
</h2>
</header>
<p>
This is an existing PatternFly component. For more details, refer to the
<a href="http://www.patternfly.org/pattern-library/widgets/…">
 design documentation on patternfly.org.
</a>
</p>
<p>
This component is based on React Bootstrap 
Horizontal Form
 component. See
 
<a href="https://react-bootstrap.github.io/components/forms…">
React Bootstrap Docs
</a>
 for complete 
Horizontal Form
 component documentation.
</p>
<br/>
<br/>
<div style={null}>
<Grid>
<Form horizontal>
<FormGroup controlId="name" disabled={false}>
<Col componentClass={ControlLabel} sm={3}>
Name
</Col>
<Col sm={9}>
<FormControl type="text" disabled={false} />
<HelpBlock>
Enter your name
</HelpBlock>
</Col>
</FormGroup>
<FormGroup controlId="address" disabled={false}>
<Col componentClass={ControlLabel} sm={3}>
Address
</Col>
<Col sm={9}>
<FormControl type="address" disabled={false} />
<HelpBlock>
Enter your address
</HelpBlock>
</Col>
</FormGroup>
<FormGroup controlId="city" disabled={false}>
<Col componentClass={ControlLabel} sm={3}>
City
</Col>
<Col sm={9}>
<FormControl type="text" disabled={false} />
<HelpBlock>
Enter your city
</HelpBlock>
</Col>
</FormGroup>
<FormGroup controlId="email" disabled={false}>
<Col componentClass={ControlLabel} sm={3}>
Email
</Col>
<Col sm={9}>
<FormControl type="email" disabled={false} />
<HelpBlock>
Enter a valid email address
</HelpBlock>
</Col>
</FormGroup>
<FormGroup controlId="phone" disabled={false}>
<Col componentClass={ControlLabel} sm={3}>
Phone
<FieldLevelHelp content={<div />} close="true" />
</Col>
<Col sm={9}>
<FormControl type="phone" disabled={false} />
<HelpBlock>
Enter a valid phone number
</HelpBlock>
</Col>
</FormGroup>
<FormGroup controlId="url" disabled={false}>
<Col componentClass={ControlLabel} sm={3}>
My meeting URL
</Col>
<Col sm={9}>
<InputGroup>
<FormControl type="url" disabled={false} />
<InputGroupButton>
<Button onClick={CopyUrl}>
Copy URL
</Button>
</InputGroupButton>
</InputGroup>
<HelpBlock>
Enter a valid URL
</HelpBlock>
</Col>
</FormGroup>
<Row style={{paddingTop: '10px',paddingBottom: '10px'}}>
<Col smOffset={3} sm={9}>
<span>
<Button bsStyle="primary" onClick={Save}>
Save
</Button>
 
</span>
<span>
<Button onClick={Cancel}>
Cancel
</Button>
 
</span>
</Col>
</Row>
</Form>
</Grid>
</div>
</div>
      </div>
    );
  }
}

export default App;
