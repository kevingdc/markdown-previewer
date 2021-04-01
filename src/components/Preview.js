import PropTypes from "prop-types";
import marked from "marked";
import DOMPurify from "dompurify";

const Preview = props => {
  const html = { __html: marked(DOMPurify.sanitize(props.text)) };
  return <div id="preview" dangerouslySetInnerHTML={html}></div>;
};

Preview.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Preview;
