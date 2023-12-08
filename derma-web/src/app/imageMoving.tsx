//@ts-ignore
import WatchingYou from 'react-watching-you';
import styled from 'styled-components';
import GitHubLinkIcon from './homePage/components/githublink';


const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #999;
  overflow: hidden;
`;
const CenaWrapper = styled.div`
  position: absolute;
  bottom: -80px;
  left: 0;
`;
const CenaImage = styled.img.attrs({
  src: 'ladies.jpg',
  alt: 'Cena',
  width: '500px',
})`
  position: relative;
  z-index: 0;
`;
const eyesPower = {
  x: 6,
  y: 2,
};

const WhitesOfEyes = styled.div`
  background: #ddd;
  position: absolute;
  height: 30px;
  width: 70px;
  top: 60px;
  left: 100px;
  z-index: -1;
`;

const Eyeball = styled.div`
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  background:   #000000;
  width: 25px;
  height: 25px;
  transition: 0.1s transform;

  ::before {
    display: inline-block;
    content: '';
    background: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  ::after {
    display: inline-block;
    content: '';
    background: #ffffff;
    width: 1px;
    height: 1px;
    filter: blur(1px);
    position: absolute;
    left: 25%;
    top: 25%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;







const LeftEyeball = styled(Eyeball)`

  top: 185px;
  left: 185px;
  z-index: 1;
`;

const leftwhite=styled(Eyeball)`
top: 185px;
  left: 185px;
  z-index: 1;
`;

const RightEyeball = styled(Eyeball)`
  top: 185px;
  left: 295px;
  z-index: 1;
`;
function Cena() {
  return (
    <Container>
      <GitHubLinkIcon />
      <CenaWrapper>
       
        <WatchingYou rotatable={false} power={eyesPower}>
          <LeftEyeball ></LeftEyeball>
         
        </WatchingYou>
        <WatchingYou rotatable={false} power={eyesPower}>
          <RightEyeball />
        </WatchingYou>
        <CenaImage />
      </CenaWrapper>
    </Container>
  );
}

export default Cena;