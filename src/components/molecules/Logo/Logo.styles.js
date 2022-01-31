import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 1589px) {
        & > div {
            width: 200px;

            img {
                object-fit: contain;
            }
        }
    }

    @media (max-width: 1199px) {
        & > div {
            width: 180px;

            img {
                object-fit: contain;
            }
        }
    }

    @media (max-width: 575px) {
        margin-bottom: 20px;
    }
`;
