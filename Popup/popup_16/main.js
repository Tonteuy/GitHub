class Popup extends React.Component {
  render() {
    return (
      <div id="popup">
        <h2 className="green">{this.props.text}</h2>
        <button onClick={this.props.closePopup}>Close</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div className="demo">
        <h1>React demo</h1>
        <p>Please click the button to create a dynamic popup.</p>
        <br />
        <button onClick={this.togglePopup.bind(this)}>Create Popup</button>
        {this.state.showPopup ? (
          <Popup
            text="This is a new window!"
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<App text="Mark" />, document.getElementById("app"));
