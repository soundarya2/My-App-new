

    const successJS = require('../dto/successDTO');
    const errorJS = require('../dto/errorDTO');
    const loginService = require('../service/loginService');
    module.exports = { 
    login: (req, res, next) => {
      try{
  
        
        var successDTO = new successJS.SuccessDTO();
        successDTO.data = loginService.undefined();

        //return successDTO
        res.json(successDTO);

      } catch(error){

        //return errorDTO
        var errorDTO = new errorJS.ErrorDTO();
        errorDTO.message = ""
        errorDTO.data = error;
        res.status(401).json(errorDTO);
      }
    },
    logout: (req, res, next) => {
      try{
  
        
        var successDTO = new successJS.SuccessDTO();
        successDTO.data = loginService.undefined();

        //return successDTO
        res.json(successDTO);

      } catch(error){

        //return errorDTO
        var errorDTO = new errorJS.ErrorDTO();
        errorDTO.message = ""
        errorDTO.data = error;
        res.status(401).json(errorDTO);
      }
    } }

