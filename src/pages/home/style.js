import styled from 'styled-components'

export const HomeWrapper = styled.div `
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div `
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div `
  width: 240px;
  float: right;
  background: green;
`
export const TopicWrapper = styled.div `
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -20px;
`
export const TopicItem = styled.div `
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  background: #f7f7f7;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  .topic-img {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`