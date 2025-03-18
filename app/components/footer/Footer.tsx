import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
    background: black;
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
    color: white;
    text-decoration: none;
    margin: 5px;
`;

const Footer = () => {
    return (
        <div>
            <FooterSection>
                <FooterItems>
                    <FooterLink href="#">About</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                </FooterItems>
            </FooterSection>
        </div>
    )
}

export default Footer
