import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const Card = styled.div`
  padding: 1rem;
  display: flex;
  min-width: 115px;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 6px;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 5px 0px;
  cursor: pointer;
`;

interface ContainerProps {
  flexDirection?: string;
  flex?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  aling-items: flex-start;

  ${mediaQueries.tablet} {
    flex-direction: column;
  }
`;

interface ChartWrapperProps {
  width?: string;
}

export const ChartWrapper = styled.div<ChartWrapperProps>`
  height: 40vh;
  width: ${({ width }) => width || "90%"};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 5px 0px;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
