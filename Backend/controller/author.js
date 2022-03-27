const Author = require('../models/author');
const { body, validationResult } = require('express-validator');
function getAuthors(req, res) {
    Author.find((err, authors_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(authors_list);
        }
    });
}
const addAuthor = [
    body('dob')
        .isDate({ format: 'YYYY-MM-DD' })
        .withMessage('Date is not formatted'),
    body('dod')
        .isDate({ format: 'YYYY-MM-DD' })
        .withMessage('Date is not formatted'),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ status: 0, degug_data: errors });
        } else {
            let { first_name, last_name, dob, dod } = req.body;
            let authorObj = new Author({ first_name, last_name, dob, dod });
            authorObj.save((error) => {
                if (error) {
                    res.json(error);
                } else {
                    res.json({ status: 'Author added' });
                }
            });
        }
    },
];
function deleteAuthor(req, res) {
    Author.findByIdAndDelete(req.params._id, function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json(`Author with id : ${req.params._id} deleted`);
        }
    });
}
module.exports = { getAuthors, addAuthor, deleteAuthor };
