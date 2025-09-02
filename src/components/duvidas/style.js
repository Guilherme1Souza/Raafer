import styled, { keyframes } from "styled-components";
import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

const slideDown = keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`;

export const Container = styled.section`
  background-color: #2e421c;
  color: white;
  padding: 10.8rem 10.9rem;

  @media (max-width: 480px) {
    padding: 5rem 5rem;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const StyledAccordion = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled(Accordion.Item)`
  border-top: 1px solid white;

  &:last-child {
    border-bottom: 1px solid white;
  }
`;

export const Header = styled(Accordion.Header)`
  all: unset;
`;

export const Trigger = styled(Accordion.Trigger)`
  all: unset;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 16px;
  transition: background 0.2s ease;

  &:hover {
    background-color: #3a4e29;
  }

  &[data-state="open"] svg {
    transform: rotate(180deg);
  }
`;

export const Content = styled(Accordion.Content)`
  overflow: hidden;
  color: white;
  font-size: 15px;

  &[data-state="open"] {
    animation: ${slideDown} 300ms ease;
  }

  &[data-state="closed"] {
    animation: ${slideUp} 300ms ease;
  }
`;

export const ChevronIcon = styled(ChevronDown)`
  width: 20px;
  height: 20px;
  transition: transform 300ms ease;
`;
