const { Response, Router } = require('express');
const validateError = require('../../../utils/functions');
const {  findAll,
    save,
    update,
   } = require('./games.gateway');

   
const getAll = async (req, res = Response) => {
    try {
      const personal = await findAll();
      res.status(200).json(personal);
    } catch (error) {
      console.log(error);
      const message = validateError(error);
      res.status(400).json({ message }); //{message:""}
    }
  };

  
const insert = async (req, res = Response) => {
    try {
      const { name, surname, lastname, birthday} = req.body;
      const person = await save({
        name,
        surname,
        lastname,
        birthday,
    
      });
      res.status(200).json(person);
    } catch (error) {
      console.log(error);
      const message = validateError(error);
      res.status(400).json({ message });
    }
  };
  
  const updatePersonal = async (req, res = Response) => {
    try {
      console.log(req.body);
      const { name, surname, lastname, birthday, id } =
        req.body;
      const person = await update({
        name,
        surname,
        lastname,
        birthday,
        id,
      });
      res.status(200).json(person);
    } catch (error) {
      console.log(error);
      const message = validateError(error);
      res.status(400).json({ message });
    }
  };
  
  