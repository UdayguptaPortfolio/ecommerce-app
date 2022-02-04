import React from 'react';
import styled from 'styled-components';
import {Facebook,Instagram,MailOutline,Phone,
    WhatsApp,Room,Twitter,
  } from "@material-ui/icons";
  import { mobile } from "../responsive";

const Container=styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}
`
const Logo=styled.h1`

`;
const Desc=styled.p`
    margin:20px 0px;
`;
const SocialContainer=styled.div`
    display:flex;
`;
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
`
const Right=styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const Center=styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
      <Container>
        <Left>
            <Logo>THE SARTE</Logo>
            <Desc>blah bah.....</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Important Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> Greater Noida , Pari Chowk 201310.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+91 6386706810. , +91 7054857031.
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> contact@sarte.in
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>

  );
};

export default Footer;
