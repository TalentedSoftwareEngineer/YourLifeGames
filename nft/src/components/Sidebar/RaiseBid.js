import { Button, Col, Input, Row } from "antd"
import { CssP } from "components/CssStyledComponent/CssStyledComponent"
import React from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"

export const RaiseBid = ({ closeSidebar }) => {
  const onClickBack = (e) => {}

  const onClickRaise = (e) => {}
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>RAISE BID</SidebarTitle>
        </TitleContainer>
        <CssP fontWeight={"400"} fontSize="16px" lineHeight="20px">
          Bid (YLT)
        </CssP>
        <Input
          placeholder="500"
          style={{
            borderRadius: "8px",
            opacity: "0.5",
            backgroundColor: "#DEDEDE",
            height: "40px",
          }}
          bordered={false}
        />

        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Button
              type="primary"
              block
              ghost
              style={{
                borderRadius: "4px",
              }}
              onClick={onClickBack}
            >
              BACK
            </Button>
          </Col>

          <Col span={12}>
            <Button
              type="primary"
              block
              style={{
                borderRadius: "4px",
              }}
              onClick={onClickRaise}
            >
              RAISE
            </Button>
          </Col>
        </Row>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
