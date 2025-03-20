'use client';

import React from 'react';
import styled from 'styled-components';

const Form = styled.form `
    display: flex;
    margin: auto;
    max-width: 400px;
`;
const Input = styled.input `
    padding: 8px;
    font-size: 14px;
    border: 1px solid grey;
    flex-grow: 1;
    background: #f1f1f1;
`;

const Button = styled.button `
    padding: 8px;
    background:rgb(0, 142, 38);
    color: white;
    font-size: 14px;
    border: 1px solid grey;
    cursor: pointer;
    &:hover {
        background: rgb(2, 118, 33);;
    }
`;



const SearchBar = () => {

    return (
        <Form >
            <Input type="text" placeholder="Enter Zip/City to find items in your area" name="search" />
            <Button type="submit">
                Search
            </Button>
        </Form>
    );
};
export default SearchBar;