import styled from 'styled-components'

export const NavWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const LeftWrap = styled.div`
  width: ${props => props.width};
  height: 100%;
  background: #011529;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width .1s ease 0s;
`
export const LogoWrap = styled.div`
  height: ${props => props.height};
  .min{
    justify-content: center;
    img{
      padding: 0;
    }
  }
  a{
    display: flex;
    align-items: center;
    height: 100%;
  }
  img{
    height: ${props => parseFloat(props.height) / 2 + 'px'};
    padding: 0 10px 0 16px;
  }
  span{
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const RightWrap = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const HeaderWrap = styled.div `
  width: 100%;
  height: ${props => props.height};
  background: #fff;
  box-shadow: 0 2px 8px #dadee0;
  display: flex;
  .nav-name{
    padding-left: 18px;
    line-height: ${props => props.height};
    font-size: 16px;
    color: #3d3d3d;
    flex: 1;
  }
`
export const RouterWrap = styled.div`
  flex: 1;
  background-color: #fff !important;
  overflow-y: auto;
  margin: ${props => props.margin};
  border-radius: 2px 0 0 2px;
`
export const ToggleFold = styled.div`
  height: 38px;
  line-height: 38px;
  text-align: center;
  border-top: 1px solid #0c3d6f;
  color: #e0dede;
  cursor: pointer;
  i{
    font-size: 16px;
  }
  &:hover{
    background: #188fff;
  }
`
export const MenuWrap = styled.div`
  flex: 1;
  overflow-y: auto;
`