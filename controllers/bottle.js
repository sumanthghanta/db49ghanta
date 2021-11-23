var Bottle = require('../models/bottle'); 
 
// List of all bottle 
exports.bottle_list = async function(req, res) { 
    try{ 
        thebottle = await Bottle.find(); 
        res.send(thebottle); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.bottle_view_all_Page = async function (req, res) {
    try {
        let thebottle = await Bottle.find();
        res.render('bottle', { title: 'bottle Search Results', results: thebottle });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific bottle.
exports.bottle_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Bottle.findById( req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};

 
// Handle bottle create on POST. 
exports.bottle_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Bottle(); 
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
exports.bottle_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Bottle.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle bottle update form on PUT. 
exports.bottle_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Bottle.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.brand)  toUpdate.brand = req.body.brand; 
        if(req.body.bottlesModel) toUpdate.bottlesModel = req.body.bottlesModel; 
        if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// Handle a show one view with id specified by query
exports.bottle_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Bottle.findById( req.query.id)
        res.render('bottledetail', {
            title: 'bottle Detail', 
            toShow: result
        });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a se.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bottle_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('bottlecreate', { title: 'bottle Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a bottle. 
// query provides the id 
exports.bottle_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Bottle.findById(req.query.id) 
        res.render('bottleupdate', { title: 'bottle Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.bottle_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Bottle.findById(req.query.id) 
        res.render('bottledelete', { title: 'bottle Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 



