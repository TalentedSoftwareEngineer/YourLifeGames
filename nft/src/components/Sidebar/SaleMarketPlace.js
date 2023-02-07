import { Button, Col, Input, Row, Typography } from "antd"
import { CssP } from "components/CssStyledComponent/CssStyledComponent"
import { DappContext } from "context"
import React, { useContext } from "react"
import { CollectionSale } from "./CollectionSale"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"

export const SaleMarketPlace = ({ CardElmnt, options, closeSidebar }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } =
    useContext(DappContext)

  const onClickBack = (event) => {
    setSidebarContent(
      <CollectionSale options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>Sale</SidebarTitle>
        </TitleContainer>

        {CardElmnt}

        <Typography.Title level={3} style={{ marginTop: "30px" }}>
          SELL ON MARKETPLACE
        </Typography.Title>

        <CssP fontSize="16px" fontWeight="400" color="#242424" mt="10px">
          Price (YLT)
        </CssP>
        <Input
          bordered={false}
          placeholder="500"
          style={{
            backgroundColor: "#DEDEDE",
            borderRadius: "8px",
            height: "37px",
            marginRight: "20px",
            width: "100%",
            color: "#737373",
          }}
        />

        <Row gutter={16} style={{ marginTop: "30px" }}>
          <Col span={12}>
            <Button
              block
              size="large"
              style={{
                color: "white",
                backgroundColor: "#A3A5A9",
              }}
              onClick={onClickBack}
            >
              BACK
            </Button>
          </Col>
          <Col span={12}>
            <Button block type="primary" size="large">
              SELL
            </Button>
          </Col>
        </Row>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
