import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux"

function Header() {
    const [burguerStatus, setBurguerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="Tesla Logo"/>
            </a>
            <HeaderCentro>
                {cars && cars.map((car, index)=> 
                    <a key={index} href="#">{car}</a>
                )}
                
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </HeaderCentro>

            <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>

            <Menu onClick = {()=>setBurguerStatus(true)}>
                <p>Menu</p>
            </Menu>
            </RightMenu>

            <BurguerNav show ={burguerStatus}>
                <CloseWrapper>
                    <CustomClose onClick = {()=>setBurguerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index)=> 
                    <li key = {index}> <a href="#">{car}</a> </li>
                )}
                <li><a href="">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>

            </BurguerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    top:0;
    left:0;
    right:0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    z-index:1;
`

const HeaderCentro = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        /* text-transform: uppercase; */
        font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        padding: 0 12px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }
    a:hover{
        display: inline;
        border-radius: 5px;
        border-width: 2px;
        background-color: rgb(214, 214, 214);
        opacity: 0.95;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        margin-right: 15px;
        font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    p{
        font-weight: 600;
        margin-right: 15px;
        font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    a:hover{
        display: inline;
        border-radius: 5px;
        border-width: 2px;
        background-color: rgb(214, 214, 214);
    }
    p:hover{
        display: inline;
        border-radius: 5px;
        border-width: 2px;
        background-color: rgb(214, 214, 214);
        opacity: 0.8;

    }

`



const BurguerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 310px;
    z-index: 16;
    list-style: none;
    padding: 30px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        margin-left: 12px;
        padding: 10px 0;
        /* border-bottom: 1px solid rgba(0,0,0,.2); */
        a{
            font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`

const Menu = styled.div`
    cursor: pointer;
`
