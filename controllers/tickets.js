const Flight = require('../models/Flight')
const Ticket = require('../models/Ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {flight})
    })
}

function create(req, res) {
    const ticket = new Ticket(req.body)
    ticket.save(function(err, ticket) {
        Flight.findById(req.params.id, function(err, flight) {
            flight.tickets.push(ticket._id)
            flight.save(function(err) {
                ticket.flight = req.params.id
                res.redirect(`/flights/${req.params.id}`)
            })
        })
    })
}