import styled from 'styled-components'

export const HeaderWrap = styled.div`
  width: 100%;
  height: ${props => props.height};
  background: #011529;
  display: flex;
  overflow: hidden;
`
export const MainWrap = styled.div`
  height: calc(100% - ${props => props.height});
  overflow: hidden;
  display: flex;
`
export const LeftWrap = styled.div`
  width: ${props => props.width};
  height: 100%;
  background: #011529;
  display: flex;
  flex-direction: column;
  transition: width .1s ease 0s;
`
export const RouterWrap = styled.div`
  flex: 1;
  background-color: #fff !important;
  margin: ${props => props.margin};
  overflow-y: auto;
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
export const LeftMenuWrap = styled.div`
  flex: 1;
  overflow-y: auto;
`
export const TopMenuWrap = styled.div`
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
export const LogoWrap = styled.div`
  flex-shrink: 0;
  width: ${props => props.width};
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`