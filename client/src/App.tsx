import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./routers/Home";
import Join from "./routers/Join";
import Login from "./routers/Login";
import Upload from "./routers/Upload";

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
