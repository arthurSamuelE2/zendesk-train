export const getTicket = async ({ client }) => {
  const results = await client.get('ticket')
  return results
}

export const getTicketID = async ({ client }) => {
  const results = await client.get('ticket.requester.id')
  return results
}

export const getRequesterInfo = async ({ client }) => {
  const results = await client.get('ticket.requester')
  return results
}