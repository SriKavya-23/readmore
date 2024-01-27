// Style your elements here
// src/components/ReadMore/styledComponents.js
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #334155;
  color: #ffffff;
  padding: 20px;
  margin: 20px 0;
`
export const Headingg = styled.h1`
 font-family:"Roboto";
`
export const MainContainer = styled.div`
 text-align:center;
 color:white;
 font-family:"Roboto";
`
export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #1e293b;
  }
`
