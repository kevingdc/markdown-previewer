import PropTypes from "prop-types";

const Editor = props => {
  return <textarea id="editor" onChange={props.onChange} value={props.text} />;
};

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
