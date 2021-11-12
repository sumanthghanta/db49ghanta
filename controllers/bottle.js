var bottle = require('../models/bottle'); 
 
// List of all bottle 
exports.bottle_list = async function(req, res) { 
    try{ 
        thebottle = await bottle.find(); 
        res.send(thebottle); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.bottle_view_all_Page = async function(req, res) { 
    try{ 
        thebottle = await bottle.find(); 
        res.render('bottle', { title: 'bottle Search Results', results: thebottle }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific bottle. 
// for a specific bottle. 
exports.bottle_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await bottle.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle bottle create on POST. 
exports.bottle_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new bottle(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"bottle_type":"goat", "cost":12, "size":"large"} 
    document.brand = req.body.brand; 
    document.bottlesModel = req.body.bottlesModel; 
    document.Quantity = req.body.Quantity; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle bottle delete form on DELETE. 
exports.bottle_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: bottle delete DELETE ' + req.params.id); 
}; 
 
// Handle bottle update form on PUT. 
// Handle bottle update form on PUT. 
exports.bottle_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await bottle.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.brand)  toUpdate.brand = req.body.brand; 
        if(req.body.bottlesModel) toUpdate.bottlesModel = req.body.bottlesModel; 
        if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } 
        catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 