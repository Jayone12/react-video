import styled from "styled-components";
import Videos from "../components/Videos";

const Wrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

function Home() {
  return (
    <Wrapper>
      <Videos />
    </Wrapper>
  );
}
export default Home;
