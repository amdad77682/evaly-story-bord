import React from "react";
import styled from "styled-components";

const StyledButton = styled.div<{ color?: string }>`
  color: ${(p) => p.color || "pink"};
`;

interface ButtonProps {
  text: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color }) => (
  <StyledButton color={color}>{text}</StyledButton>
);

export { ButtonProps, Button };
