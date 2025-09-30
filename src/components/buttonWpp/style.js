import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;
export const ButtonWpp = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 12px 16px;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;
export const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
