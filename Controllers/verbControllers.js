const { selectPastTenseVerbs, selectPresentTenseVerbs, selectConditionalTenseVerbs, selectPastTensePerVerbs, selectFutureTensePerVerbs, selectConditionalTensePerVerbs, selectImpPastTenseVerbsById, selectImpPresentTenseVerbsById, selectImpConditionalTenseVerbsById, selectPastTensePerVerbsById, selectFutureTensePerVerbsById, selectConditionalTensePerVerbsById } = require("../Models/verbModels");
const { validateImpVerbUnit, validatePerVerbUnit } = require("../database/utils");

function getImpPastTenseVerbs(req, res, next) {

    const { unit } = req.query;

    if (!validateImpVerbUnit(unit)) {
        return next({ status: 404, msg: "Invalid unit option" });
    }  
    
    selectPastTenseVerbs(unit).then((data) => {
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

    const { unit } = req.query;

    if (!validateImpVerbUnit(unit)) {
        return next({ status: 404, msg: "Invalid unit option" });
    }

    selectPresentTenseVerbs(unit).then((data) => {
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

    const { unit } = req.query;

    if (!validateImpVerbUnit(unit)) {
        return next({ status: 404, msg: "Invalid unit option" });
    }

    selectConditionalTenseVerbs(unit).then((data) => {
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

    const { unit } = req.query;

    if (!validatePerVerbUnit(unit)) {
        return next({ status: 404, msg: "Invalid unit option" });
    }

    selectPastTensePerVerbs(unit).then((data) => {
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

    const { unit } = req.query;

    if (!validatePerVerbUnit(unit)) {
        return next({ status: 404, msg: "Invalid unit option" });
    }

    selectFutureTensePerVerbs(unit).then((data) => {
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

    const { unit } = req.query;

    if (!validatePerVerbUnit(unit)) {
        return next({ status: 404, msg: "Invalid unit option" });
    }

    selectConditionalTensePerVerbs(unit).then((data) => {
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