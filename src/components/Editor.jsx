import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, device } from "../styles/variables";

const StyledEditor = styled.textarea`
  resize: none;
  border: 0;
  margin: 1.6rem 1rem 1.6rem 1rem;
  padding: 0;

  background-color: ${theme.bgSecondary};
  color: ${theme.secondary};

  height: 50vh;
  width: 100%;

  @media ${device.tabletLandscape} {
    height: 80vh;
    width: 45%;
  }
`;

const Editor = props => {
  return (
    <StyledEditor id="editor" onChange={props.onChange} value={props.text} />
  );
};

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
