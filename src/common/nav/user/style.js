import styled from 'styled-components'

export const UserDropdown = styled.div`
  flex-shrink: 0;
  width: 110px;
  text-align: right;
  padding-right: 16px;
  line-height: ${props => props.height};
  color: #c8cdd2;
  cursor: pointer;
  i{
    padding-left: 2px;
  }
  &:hover{
    /* color: #fff; */
  }  
`
export const UserWrap = styled.div`
  .droit{
    padding-top: 2px;
    line-height: 16px;
    font-size: 12px;
    color: #909399;
    max-width: 100px;
    white-space: normal;
  }
`