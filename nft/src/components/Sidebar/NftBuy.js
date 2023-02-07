import { Button, Col, Divider, Image, Row, Space, Typography } from "antd"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { DappContext } from "context"
import React, { useCallback, useContext } from "react"
import { RaiseBid } from "./RaiseBid"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"

export const NftBuy = ({ closeSidebar }) => {
  const { setSidebarContent, setOpenSidebar, onCloseSidebar } =
    useContext(DappContext)

  const openRaiseBidSidebar = () => {
    setSidebarContent(<RaiseBid closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  const onClickBuyNow = (e) => {}

  const onClickRaiseBid = (e) => {
    openRaiseBidSidebar()
  }
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>BUY</SidebarTitle>
        </TitleContainer>

        <Row
          split={<Divider type="vertical" />}
          style={{
            position: "relative",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "25px 0",
          }}
        >
          <Col span={12}>
            <Typography.Title
              level={5}
              style={{ color: "#242424", textAlign: "center" }}
            >
              current bid
            </Typography.Title>
            <Space>
              <Image width={60} src="/favicon.ico" preview={false} />
              <Typography.Title level={3}>0.011</Typography.Title>
            </Space>
            <CssP fontSize="18px">13:56:12</CssP>
          </Col>
          <CssDiv
            position="absolute"
            left="50%"
            top="50%"
            width="0"
            height="80%"
            transform="translate(-50%, -50%)"
            border="1px solid #000"
          />
          <Col span={12}>
            <Typography.Title
              level={5}
              style={{ color: "#242424", textAlign: "center" }}
            >
              instant redemption
            </Typography.Title>
            <Space>
              <Image width={60} src="/favicon.ico" preview={false} />
              <Typography.Title level={3}>0.411</Typography.Title>
            </Space>
          </Col>
        </Row>

        <Button
          type="primary"
          block
          style={{
            marginTop: "30px",
          }}
          onClick={onClickBuyNow}
        >
          BUY NOW
        </Button>
        <Button
          type="primary"
          block
          style={{
            marginTop: "10px",
          }}
          onClick={onClickRaiseBid}
        >
          RAISE BID
        </Button>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
