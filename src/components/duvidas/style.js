import styled, { keyframes } from "styled-components";
import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

const slideDown = keyframes`
  from { height: 0; opacity: 0; }
  to { height: var(--radix-accordion-content-height); opacity: 1; }
`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height); opacity: 1; }
  to { height: 0; opacity: 0; }
`;

export const Container = styled.section`
  background: linear-gradient(135deg, #2e421c, #1f2d14);
  color: white;
  padding: 8rem 10rem;

  @media (max-width: 768px) {
    padding: 5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  font-family: "Figtree", sans-serif;
  color: #e2e8cf;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const StyledAccordion = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

export const Item = styled(Accordion.Item)`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  &[data-state="open"] {
    border-color: #a6d48f;
    background: rgba(166, 212, 143, 0.1);
  }
`;

export const Header = styled(Accordion.Header)`
  all: unset;
`;

export const Trigger = styled(Accordion.Trigger)`
  all: unset;
  width: 100%;
  padding: 1.8rem 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 2.2rem;
  font-weight: 600;
  font-family: "Figtree", sans-serif;
  color: #f5f7f2;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  &[data-state="open"] svg {
    transform: rotate(180deg);
    color: #a6d48f;
  }
`;

export const Content = styled(Accordion.Content)`
  overflow: hidden;
  color: #d6e6cc;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 1.6;

  font-family: "Figtree", sans-serif;

  &[data-state="open"] {
    animation: ${slideDown} 300ms ease forwards;
  }

  &[data-state="closed"] {
    animation: ${slideUp} 200ms ease forwards;
  }
`;

export const ChevronIcon = styled(ChevronDown)`
  width: 22px;
  height: 22px;
  transition: transform 300ms ease;
  color: #f5f7f2;
`;
