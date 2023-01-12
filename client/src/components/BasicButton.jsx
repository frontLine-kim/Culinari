import styled from "styled-components";
// 해당컴포넌트는 div를 감싸서 써야 글씨가 정렬됨
const BasicButton = ({href, children, font, radius, p_height, p_width}) =>{
    const styles = {font, radius, p_height, p_width};
    return(
        <>
            <Colbtn {...styles} href={href}>
                {children}
            </Colbtn>
        </>
    )
}

BasicButton.defaultProps = {
    children: null,
    font:"12",
    radius:"4",
    p_height:"4",
    p_width:"7",
    
}

const Colbtn = styled.a`
    background-color: #FFF7F5;
    border: 1px solid #ff6767;
    cursor: pointer;
    color: #ff6767;
    vertical-align: middle;
    border-radius: ${props => props.radius}px;
    font-size: ${props => props.font}px;
    padding: ${props => props.p_height}px ${props => props.p_width}px;
`
export default BasicButton;
