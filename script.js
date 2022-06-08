class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userChoice: '',
      compChoice: '',
      compTitle: '',
      pageTitle: '請選擇一個與電腦進行PK',
      showComponent: true,
      result: '' };


    this.randomChoice = this.randomChoice.bind(this);
    this.userPickRock = this.userPickRock.bind(this);
    this.userPickPaper = this.userPickPaper.bind(this);
    this.userPickScissors = this.userPickScissors.bind(this);
    this.result = this.result.bind(this);
    this.replayability = this.replayability.bind(this);
  }

  userPickRock() {
    this.setState({
      userChoice: 'Rock',
      pageTitle: '你選擇 : 石頭',
      showComponent: false });

    this.randomChoice();
  }

  userPickPaper() {
    this.setState({
      userChoice: 'Paper',
      pageTitle: '你選擇 : 布',
      showComponent: false });

    this.randomChoice();
  }

  userPickScissors() {
    this.setState({
      userChoice: 'Scissors',
      pageTitle: '你選擇 : 剪刀',
      showComponent: false });

    this.randomChoice();
  }

  randomChoice() {
    let _compChoice = Math.floor(Math.random() * 3 + 1); //random number between 1-3
    switch (_compChoice) {
      case 1:
        this.setState({
          compTitle: '電腦選擇 : 石頭',
          compChoice: 'Rock' });

        break;
      case 2:
        this.setState({
          compTitle: '電腦選擇 : 布',
          compChoice: 'Paper' });

        break;
      case 3:
        this.setState({
          compTitle: '電腦選擇 : 剪刀',
          compChoice: 'Scissors' });

        break;}

    this.result();
  }

  result() {
    this.setState(state => {
      if (state.userChoice === state.compChoice) {
        return { result: '雙方平手' };
      } else
      if (state.userChoice == 'Rock') {//Checking when user choice is rock
        if (state.compChoice == 'Scissors') {
          return { result: '你贏了' };
        } else
        {
          return { result: '你輸了' };
        }
      } else
      if (state.userChoice == 'Paper') {
        if (state.compChoice == 'Rock') {
          return { result: '你贏了' };
        } else
        {
          return { result: '你輸了' };
        }
      } else
      if (state.userChoice == 'Scissors') {
        if (state.compChoice == 'Rock') {
          return { result: '你輸了' };
        } else
        {
          return { result: '你贏了' };
        }
      }
    });
  }
  replayability() {
    this.setState({
      userChoice: '',
      compChoice: '',
      compTitle: '',
      pageTitle: '請選擇一個與電腦進行PK',
      showComponent: true,
      result: '' });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h3", { id: "title" }, this.state.pageTitle),

      this.state.showComponent ? /*#__PURE__*/
      React.createElement(Buttons, {
        rockOnClick: this.userPickRock,
        paperOnClick: this.userPickPaper,
        scissorsOnClick: this.userPickScissors }) :

      null, /*#__PURE__*/


      React.createElement("div", { id: "computer-choice" }, /*#__PURE__*/
      React.createElement("h3", null, this.state.compTitle)), /*#__PURE__*/


      React.createElement("div", { id: "result" }, /*#__PURE__*/
      React.createElement("h1", null, this.state.result),
      this.state.showComponent ?
      null : /*#__PURE__*/
      React.createElement(Replayability, {
        replay: this.replayability }))));




  }}


class Buttons extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { id: "choices", className: "row" }, /*#__PURE__*/

      React.createElement("button", { id: "rock", className: "btn", onClick: this.props.rockOnClick }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-hand-rock fa-4x" })), /*#__PURE__*/


      React.createElement("button", { id: "paper", className: "btn", onClick: this.props.paperOnClick }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-hand-paper fa-4x" })), /*#__PURE__*/


      React.createElement("button", { id: "scissors", className: "btn", onClick: this.props.scissorsOnClick }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-hand-scissors fa-4x" })))));





  }}


class Replayability extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("p", { id: "play-again" }, "\u518D\u4F86\u4E00\u6B21"), /*#__PURE__*/
      React.createElement("button", { id: "replay", className: "btn", onClick: this.props.replay }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-undo-alt fa-2x" }))));



  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));