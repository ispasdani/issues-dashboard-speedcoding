import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
  status?:
    | "Closed"
    | "Resolved"
    | "Awaiting Additional Info"
    | "Pending"
    | "Active";
  buttonText?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<
  Pick<
    ButtonProps,
    | "backgroundColor"
    | "color"
    | "hoverColor"
    | "status"
    | "buttonText"
    | "disabled"
  >
>`
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ backgroundColor, buttonText }) =>
    backgroundColor || "#f5f7f8"};
  color: ${({ color }) => color || "#000"};
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: ${({ hoverColor, buttonText }) =>
      hoverColor ||
      (buttonText === "Close"
        ? "#fae8ef"
        : buttonText === "Resolve"
        ? "#e4f4f4"
        : buttonText === "Request Info"
        ? "#efeafc"
        : buttonText === "Pending"
        ? "#fef6ea"
        : buttonText === "Active"
        ? "#bed9f6"
        : "#b9bbbc")};
    color: ${({ disabled, buttonText }) =>
      disabled
        ? "white"
        : buttonText === "Close"
        ? "#d8316e"
        : buttonText === "Resolve"
        ? "#169e97"
        : buttonText === "Request Info"
        ? "#7f69f1"
        : buttonText === "Pending"
        ? "#fdc85c"
        : buttonText === "Active"
        ? "#007bff"
        : "black"};

    transform: ${({ disabled }) => (disabled ? "" : "scale(1.1)")};
  }
`;

const Button = ({
  onClick,
  children,
  backgroundColor,
  color,
  hoverColor,
  status,
  buttonText,
  disabled,
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    backgroundColor={backgroundColor}
    color={color}
    hoverColor={hoverColor}
    status={status}
    buttonText={buttonText}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default Button;
