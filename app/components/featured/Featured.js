import { CardContent } from '@mui/material';
import styled from 'styled-components';


const Card = styled.div `
    width: 200px;
    height: auto;
    background: #f5f5f5;
    position: relative;
`;
const CardMaterial = styled.div `
    background: #d6f5d6;
    border-radius: 25px;
    border: 2px solid #c3c6ce;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    padding: 40px;
    width: 90%;
    margin: 0 auto;
`;
const CardImage = styled.div `
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100px;
    border-radius: 6px 6px 0 0;
`;
const Category = styled.div `
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    color: rgb(63, 121, 230);
    padding: 10px 7px 0;
`;
const Heading = styled.div `
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
    
`;


const FeaturedItems = () => {
    return (
        <CardMaterial>
        <Card>
            <CardImage> 
                <Category> Category
                    <Heading> A heading that should be two lines
                    </Heading>
                </Category>
            </CardImage>
            
        </Card>
        <Card>
            <CardImage> 
                <Category> Category
                    <Heading> A heading
                    </Heading>
                </Category>
            </CardImage>
            
        </Card>
        <Card>
            <CardImage> 
                <Category> Category
                    <Heading> A heading
                    </Heading>
                </Category>
            </CardImage>
            
        </Card>
        <Card>
            <CardImage> 
                <Category> Category
                    <Heading> A heading
                    </Heading>
                </Category>
            </CardImage>
            
        </Card>
    </CardMaterial>
    );
};

export default FeaturedItems;