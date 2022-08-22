import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const MenuContainer = styled.ul`
  display: flex;
  li {
    margin-left: 20px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">Logo</Link>
      </h1>
      <MenuContainer>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>Join</li>
      </MenuContainer>
    </HeaderContainer>
  );
}
export default Header;
