import styled from "styled-components";

import { theme } from "../styles/variables";

const Container = styled.div`
  padding-left: ${props => {
    if (props.full) return 0;
    return "calc((100vw - 960px) / 2)";
  }};

  padding-right: ${props => {
    if (props.full) return 0;
    return "calc((100vw - 960px) / 2)";
  }};

  padding-top: ${props => {
    if (props.fullVertical) return 0;
    if (props.small) return "15px";
    return "25px";
  }};

  padding-bottom: ${props => {
    if (props.fullVertical) return 0;
    if (props.small) return "15px";
    return "25px";
  }};

  background-color: ${props => {
    if (props.bgSecondary) return theme.bgSecondary;
    return theme.bgPrimary;
  }};

  color: ${props => {
    if (props.textSecondary) return theme.secondary;
    return theme.primary;
  }};

  overflow-y: scroll;
`;

export default Container;
