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
      <h1>Logo</h1>
      <MenuContainer>
        <li>Home</li>
        <li>Login</li>
        <li>Join</li>
      </MenuContainer>
    </HeaderContainer>
  );
}
export default Header;
