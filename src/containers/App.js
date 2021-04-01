import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text:
        "Check out [GitHub's Markdown Cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)!",
    };
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default App;
