import React, { useEffect } from "react"
import { Container } from "./Layout.styles"
import { Col, Grid, Row } from "@zendeskgarden/react-grid"
import { useGetRequesterInfo, useGetTicket, useGetTicketID } from "./network/resolver"
import { Dots } from "@zendeskgarden/react-loaders"
import { formatDate } from "../utils/helper"

export default function Layout({ client }) {
  const { data, isLoading } = useGetTicket({ client })
  const dataTicket = data?.ticket

  useEffect(() => {
    console.log(data)
  }, [data])

  if (isLoading) {
    return (
      <Row>
        <Col textAlign="center">
          <Dots />
        </Col>
      </Row>

    )
  }

  return (
    <div>
      <Container>
        <Grid gutters={'md'}>
          <Row>
            <Col size={5}>Customer:</Col>
            <Col>{dataTicket?.requester?.name}</Col>
          </Row>
          <Row>
            <Col size={5}>Tags:</Col>
            <Col>{dataTicket?.tags.length > 0 ? dataTicket?.tags[0] : ''}</Col>
          </Row>
          <Row>
            <Col size={5}>Last signed in:</Col>
            <Col>{formatDate(dataTicket?.updatedAt)}</Col>
          </Row>
          <Row>
            <Col size={5}>Added:</Col>
            <Col>{formatDate(dataTicket?.createdAt)}</Col>
          </Row>
        </Grid>
      </Container>
    </div>
  )
}