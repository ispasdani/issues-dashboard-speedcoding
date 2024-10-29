import styled from "styled-components";
import React from "react";

interface LabelProps {
  children: React.ReactNode;
  size?: string;
  color?: string;
}

const StyledLabel = styled.p<LabelProps>`
  margin: 0;
  font-size: ${({ size }) => size || "1rem"};
  color: ${({ color }) => color || "#8390a3"};
`;

const Label = (props: LabelProps) => <StyledLabel {...props} />;

export default Label;
