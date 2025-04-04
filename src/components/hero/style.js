import styled from "styled-components";
import imageHero from "../../images/hero.png";
import imgCasal from "../../images/casal.png"


export const Container = styled.div`
  /* background: url(${imageHero}) center/cover no-repeat; */
  background-color: ${({ theme }) => theme.COLORS.BROWN};
  max-width: 100%;
  height: 646px;
  padding-left: 94px;

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
        padding-left: 28px;
        height: auto;
        max-width: 100%;
        background-size: cover;
    }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        padding-left: 28px;
        height: auto;
        max-width: 100%;
        background-size: cover;
    }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        padding-left: 28px;
        height: auto;
        max-width: 100%;
        background-size: cover;
    }
`;

export const BoxHero = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
        max-width: 100%;
        padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        flex-direction: column;
        max-width: 100%;
    }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        flex-direction: column;
        max-width: 100%;
    }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  padding: 180px 40px;
  text-align: start;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    font-size: 36px;
    max-width: 800px;
  }

  @media (max-width: ${({ theme }) => theme.bp.bigDesktop}) {
        max-width: 620px;
        font-size: 36px;
        padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
        max-width: 550px;
        font-size: 36px;
        padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
        padding: 80px 0;
        max-width: 550px;
        font-size: 36px;
        line-height: 42px;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        height: 300px;
        max-width: 700px;
        padding: 20px;
        font-size: 36px;
        margin-top: 80px;
    }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        height: 480px;
        max-width: 460px;
        padding-right: 20px;
        font-size: 36px;
    }
`;

export const Subtext = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  max-width: 750px;
  margin-top: 14px;

  @media (max-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    font-size: 20px;
    max-width: 700px;
  }

  @media (max-width: ${({ theme }) => theme.bp.bigDesktop}) {
        max-width: 620px;
        font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
        max-width: 550px;
        font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
        max-width: 450px;
        font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        height: 100px;
        max-width: 700px;
        font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      height: 170px;
      max-width: 400px;
      font-size: 20px;
      padding-bottom: 25px;
    }
`;

export const BackgroundCasal = styled.div`
  background: url(${imgCasal})center/cover no-repeat;
  width: 500px;
  height: 500px;
  margin-left: 300px;
  margin-top: 35px;

  @media (max-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    width: 500px;
    height: 500px;
    margin-left: 190px;
    margin-top: 35px;
  }

  @media (max-width: ${({ theme }) => theme.bp.veryBigDesktop}) {
    width: 500px;
    height: 500px;
    margin-left: 100px;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.bp.bigDesktop}) {
    width: 400px;
    height: 400px;
    margin-left: 90px;
    margin-top: 135px;
  }


  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    width: 400px;
    height: 400px;
    margin-left: -20px;
    margin-top: 135px;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
    width: 400px;
    height: 400px;
    margin-left: -20px;
    margin-top: 110px;
  }


  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    /* display: none; */
    display: flex;
    justify-content: start;
    align-items: start;
    margin: 0 auto;
    width: 500px;
    height: 500px;
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    width: 300px;
    height: 300px;
   
    }
`;

export const Button = styled.button`
  width: 203px;
  height: 45px;
  margin-top: 34px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.28);
  border: none;
  border-radius: 0px 10px;
  transition: 0.3s ease-in-out;

  &:hover {
        color: ${({ theme }) => theme.COLORS.BLACK};
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
    }

    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
      margin-left: 0;
      width: 203px;
      height: 40px;
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      margin-left: 0;
      width: 203px;
    }
`
