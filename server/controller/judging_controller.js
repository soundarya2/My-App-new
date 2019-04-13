

    const successJS = require('../dto/successDTO');
    const errorJS = require('../dto/errorDTO');
    const judgingService = require('../service/judgingService');
    module.exports = { 
    giveMarks: (req, res, next) => {
      try{
  
        
        var successDTO = new successJS.SuccessDTO();
        successDTO.data = judgingService.undefined();

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

