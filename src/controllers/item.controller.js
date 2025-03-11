const {Item} = require("../models");

/**
 * Get all items
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getAllItems = async (req, res) => {
    try {

        const items = await Item.findAll();
        // If no users are found, return an empty array
        if (!items || items.length === 0) {
            return res.status(404).json({message: 'No Item found'});
        }
        // Return the users in the response
        return res.status(200).json({
            message: 'Item retrieved successfully',
            items,
        });

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        // Return a generic error message to the client
        return res.status(500).json({
            message: 'An error occurred while creating the item',
            error: error.message,
        });
    }
};

/**
 * Get a single item by ID
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getItem = async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    res.json(item || {});
};

/**
 * Create new item
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createItem = async (req, res) => {
    try {
        const newItem = await Item.create({name: req.body.name});
        res.json(newItem);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes

        // Return a generic error message to the client
        return res.status(500).json({
            message: 'An error occurred while creating the user',
            error: error.message,
        });
    }
};

/**
 * Update item
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateItem = async (req, res) => {
    await Item.update({name: req.body.name}, {where: {id: req.params.id}});
    res.json({message: "✅ Item updated"});
};

/**
 * Delete Item
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteItem = async (req, res) => {
    await Item.destroy({where: {id: req.params.id}});
    res.json({message: "✅ Item deleted"});
};
