const { selectPastTenseVerbs, selectPresentTenseVerbs , selectConditionalTenseVerbs, selectPastTensePerVerbs, selectFutureTensePerVerbs, selectConditionalTensePerVerbs, selectImpPastTenseVerbsById, selectImpPresentTenseVerbsById, selectImpConditionalTenseVerbsById, selectPastTensePerVerbsById, selectFutureTensePerVerbsById, selectConditionalTensePerVerbsById } = require("../Models/verbModels")

function getImpPastTenseVerbs(req, res, next) {
    selectPastTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getImpPastTenseVerbsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectImpPastTenseVerbsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    })    
}

function getImpPresentTenseVerbs(req, res, next) {
    selectPresentTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getImpPresentTenseVerbsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectImpPresentTenseVerbsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    })  
}

function getImpConditionalTenseVerbs(req, res, next) {
    selectConditionalTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getImpConditionalTenseVerbsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectImpConditionalTenseVerbsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    })
}








function getPastTensePerVerbs(req, res, next) {
    selectPastTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getPastTensePerVerbsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectPastTensePerVerbsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    })    
}

function getFutureTensePerVerbs(req, res, next) {
    selectFutureTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getFutureTensePerVerbsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectFutureTensePerVerbsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    }) 
}

function getConditionalTensePerVerbs(req, res, next) {
    selectConditionalTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getConditionalTensePerVerbsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectConditionalTensePerVerbsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    }) 
}

module.exports = {
    getImpPastTenseVerbs,
    getImpPresentTenseVerbs,
    getImpConditionalTenseVerbs,
    getPastTensePerVerbs,
    getFutureTensePerVerbs,
    getConditionalTensePerVerbs,
    getImpPastTenseVerbsById,
    getImpPresentTenseVerbsById,
    getImpConditionalTenseVerbsById,
    getPastTensePerVerbsById,
    getFutureTensePerVerbsById,
    getConditionalTensePerVerbsById
};