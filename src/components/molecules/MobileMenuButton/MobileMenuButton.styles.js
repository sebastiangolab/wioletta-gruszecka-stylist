import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;

    @media (max-width: 991px) {
        font-size: 25px;
        font-weight: 300;
        background-color: ${({theme}) => theme.colors.primary};
        padding: 6px 20px 2px;
        border-radius: 7px;
        display: block;
        margin-left: 15px;
    }

    @media (max-width: 575px) {
        padding: 8px 20px 4px;
    }
`;
