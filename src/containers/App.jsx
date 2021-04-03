import React from "react";

import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <Container full fullVertical bgPrimary>
        <Flex column contentCenter alignCenter>
          <Container full small bgSecondary style={{ width: "100%" }}>
            <Heading h3 center noMargin>
              Markdown Previewer
            </Heading>
          </Container>
          <Flex
            justifyCenter
            alignCenter
            contentCenter
            style={{ width: "90%" }}
          >
            <Editor text={this.state.text} onChange={this.handleChange} />
            <Preview text={this.state.text} />
          </Flex>
        </Flex>
      </Container>
    );
  }
}

export default App;
