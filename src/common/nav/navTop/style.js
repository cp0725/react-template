import styled from 'styled-components'

export const HeaderWrap = styled.div`
  width: 100%;
  height: ${props => props.height};
  background: #011529;
  display: flex;
  overflow: hidden;
`
export const LogoWrap = styled.div`
  flex-shrink: 0;
  a{
    display: flex;
    align-items: center;
    height: 100%;
  }
  img{
    height: 56%;
    padding: 0 10px 0 16px;
  }
  span{
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    padding-right: 20px;
  }
`
export const MenuWrap = styled.div`
  flex: 1;
  flex-shrink: 1;
  width: 500px;
  .ant-menu-dark.ant-menu-horizontal{
    height: ${props => props.height};
    & > li{
      height: ${props => props.height};
      line-height: ${props => props.height};
    }
  }
`
export const RouterWrap = styled.div`
  padding: 0 16px;
  background-color: #fff !important;
  height: calc(100% - ${props => props.height});
  overflow-y: auto;
`