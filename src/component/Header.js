import { Box, styled } from '@mui/material'
import React from 'react';
import headerImage from '../images/banner.jpg';
import SearchInputEl from './SearchInputEl';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 520,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main,
            opacity: 0.75
        }

    ));
    return (
        <>
            <StyleHeader >
                <SearchInputEl />
            </StyleHeader>
        </>
    )
}

export default Header;

