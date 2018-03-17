export class UtilService {


    getDate(date:Date){
        let month = (date.getMonth()+1).toString();
        let mm = month.length === 1 ? `0${month}`:month;
    
        let dte = date.getDate().toString();
        let dd = dte.length === 1 ? `0${dte}`:dte;
        return `${dd}/${mm}/${date.getFullYear()}`;
      }

}