import styled from "styled-components";

export const Line = styled.div`
  position: absolute;
  right: 0;
  width: 500px;
  border-top: 9px solid ${({ theme }) => theme.COLORS.BROWN};
  border-radius: 0rem 0rem 0rem 1rem;
`;
