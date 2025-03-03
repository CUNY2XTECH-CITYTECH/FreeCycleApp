import styled from 'styled-components';
import Link from 'next/link';


const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FooterItems = styled.div `
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 20px;
`;
const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 5px;
    &:hover {
    text-decoration: underline;
}
`;

const Footer = () => {
    return (
        <div>
            <FooterSection>
                <FooterItems>
                    <FooterLink href="">Home</FooterLink>
                    <FooterLink href="#">About</FooterLink>
                    <FooterLink href="#">FAQ</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Social Media</FooterLink>
                </FooterItems>
            </FooterSection>
        </div>
    )
}

export default Footer