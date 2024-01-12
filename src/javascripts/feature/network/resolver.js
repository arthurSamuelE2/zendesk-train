import useRequest from "../../hook/useRequest"
import { getRequesterInfo, getTicket, getTicketID } from "./service"

export const useGetTicket = ({ client }) => {
  const results = useRequest({
    fn: async () => await getTicket({ client })
  })
  return results
}

export const useGetTicketID = ({ client }) => {
  const results = useRequest({
    fn: async () => await getTicketID({ client })
  })
  return results
}

export const useGetRequesterInfo = ({ client }) => {
  const results = useRequest({
    fn: async () => await getRequesterInfo({ client })
  })
  return results
}