import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
    };
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <h1>Welcome to Simple Blog 2</h1>
      </React.Fragment>
    );
  }
}

export default Main;