import {
  ticketsService,
  cartsService,
  usersService,
} from "../services/index.js";

const getTickets = async (req, res) => {
  const result = await ticketsService.getTickets();
  res.send({ status: "success", payload: result });
};

const getTicketById = async (req, res) => {
  const { tid } = req.params;
  const ticket = await ticketsService.getTicketById(tid);
  if (!ticket)
    return res
      .status(404)
      .send({ status: "error", message: "Ticket not found" });
  res.send({ status: "success", payload: ticket });
};
const createTicket = async (req, res) => {
  const result = await ticketsService.createTicket();
  res.send({ status: "success", payload: result });
};

export default {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};
