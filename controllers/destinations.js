const Flight = require('../models/Flight')

module.exports = {
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        //we push subdocs (objs) with the data w/ the destination subdoc into mongoose arrs
        flight.destinations.push(req.body)
        //save changes made in the flight doc
        flight.save(function(err) {
            //respond with request(redirect)
            res.redirect(`/flights/${req.params.id}`)
        })
    })
}