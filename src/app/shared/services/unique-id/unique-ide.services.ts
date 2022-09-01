import { Injectable } from "@angular/core";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UniqueIdService{
  private numberOfGeneratedIds=0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;
  public generatedUniqueIdWithPrefix(prefix:string):string{
    //SE ESQUECEU DE MANDAR O PREFIXO
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty');
    }
    const uniqueId=this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }


  //SABER A QUANTIDADE DE ODS
  public getNumberOfGeneratedUniqueIds():number{
    return this.numberOfGeneratedIds;
  }

  //GERAR OS IDS UNICOS
  private generateUniqueId():string{
    //PRA GERAR O ID
    return uuidv4();
  }


}
