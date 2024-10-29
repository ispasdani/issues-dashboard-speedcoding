import styled from "styled-components";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  size?: string;
  color?: string;
  fontWeight?: string;
}

const StyledText = styled.p<TextProps>`
  margin: 0;
  font-size: ${({ size }) => size || "1rem"};
  color: ${({ color }) => color || "black"};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
`;

const Text = (props: TextProps) => (
  <StyledText {...props}>{props.children}</StyledText>
);

export default Text;
