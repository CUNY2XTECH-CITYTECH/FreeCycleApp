import styled from 'styled-components';

const Description = styled.div `
    background: #d6f5d6;
    border-radius: 20px;
    box-shadow: 0 2px 5px #e6e6e6;
    justify content: center;
    padding: 40px;
    margin: 40px auto;
    width: 90%;
`;

const About = () => {
    return (

        <div>
            <Description>
                Free-Cycle is a community-driven strategy that promotes the reuse and recycling of items by 
                allowing other to give away items for free 
                rather than scrapping them. 
                This platform allows individuals to post items they want to give away or items they are seeking. 
                The goal of free-cycling is to help reduce waste, promote sustainability, and fostering the awareness 
                of community by motivating people to share resources. 
                It ensures a win-win setting, because items get a new chance at usability with someone who needs them 
                and it helps decrease the wasted that ends up in landfills.
            </Description>
        </div>

    );
};

export default About;


