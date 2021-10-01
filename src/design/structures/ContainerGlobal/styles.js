import styled from "styled-components";

import Theme from "../../theme";

export const Container = styled.section`
    background-color: ${Theme.colors.background};
    display: flex;
	flex-wrap: wrap;
	align-items: space-between;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
 

    padding-left: ${Theme.spacing.n3};
    padding-right: ${Theme.spacing.n3};
    padding-top: ${Theme.spacing.n3};
    

`