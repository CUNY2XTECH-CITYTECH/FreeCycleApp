"use client";

import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Nav = styled.nav`
  height: 80px;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 0rem 2rem;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const HomeButton = styled(StyledLink) `
  background-color: transparent;
  padding: 3px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
    
`

const ButtonCont = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  vertical-align: middle;
`;

const LoginButton = styled(StyledLink)`
  background-color: transparent;
  border: 1px solid gray;
  padding: 3px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
  &:hover {
    background-color: white;
    color: black;
    border-color: #000;
  }
`;

const LogoutButton = styled(StyledLink)`
  background-color: transparent;
  border: 1px solid gray;
  padding: 3px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border-color: #000;
  }
`;

const Navbar = () => {
  const router = useRouter();

  const doLogout = () => {
    console.log('User has been logged out');
    router.push('/login');
  };

  return (
    <Nav>
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <Image
          src="/images/fc.png"
          alt="Logo"
          width={80}
          height={80}
        />
        <HomeButton href="/home">Home</HomeButton>
      </div>
      <ButtonCont>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-handbag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
          </svg>
        </button>
        <StyledLink href="/signup">SignUp</StyledLink>
        <LoginButton href="/login">Login</LoginButton>
        <LogoutButton href="/logout" onClick={doLogout}>Logout</LogoutButton>

        <StyledLink href="/profile/:userId">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </StyledLink>
      </ButtonCont>
    </Nav>
  );
};
export default Navbar;

