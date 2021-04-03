import PropTypes from "prop-types";
import styled from "styled-components";
import marked from "marked";
import DOMPurify from "dompurify";

import { theme, device } from "../styles/variables";

marked.setOptions({ breaks: true });

const StyledPreview = styled.div`
  border: 0;
  margin: 1.6rem 1rem 1.6rem 1rem;
  padding: 0;
  overflow: scroll;

  background-color: ${theme.bgSecondary};
  color: ${theme.secondary};

  height: 50vh;
  width: 100%;

  @media ${device.tabletLandscape} {
    height: 80vh;
    width: 45%;
  }
`;

const Preview = props => {
  const html = { __html: DOMPurify.sanitize(marked(props.text)) };
  return <StyledPreview id="preview" dangerouslySetInnerHTML={html} />;
};

Preview.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Preview;
