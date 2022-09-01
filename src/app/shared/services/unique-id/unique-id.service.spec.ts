import { UniqueIdService } from './unique-ide.services';


describe(UniqueIdService.name,()=>{

  let service: UniqueIdService = null;
  beforeEach(() => {
    //O QUE VC COLOCAR AQUI VAI SER EXECUTADO ANTES DE CADA IT
    service = new UniqueIdService();
  });

  //CRITERIOS DO TESTE
  //METODOS DE UM COMPONENTE
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`,()=>
  {

    //GERA UM ID
    const id=service.generatedUniqueIdWithPrefix('app');
    //const id='asdsaas-aapp-sdasda'
    //EXPECTATIVA QUE O ID TENHA O PREFIXO APP
    //TENTA SER PRECISO
    //expect(id).toContain('app-');
    //O DE CIMA SO CONTEM
    //NESSE EXEMPLO DE BAIXO VERIFICAMOS PRECISAMENTE
    expect(id.startsWith('app-')).toBeTrue();

  });

  //PODEMOS TER QUANTOS ITS QUISERMOS
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should  not generate id when called multiple times`,()=>{

    // const firtsId=service.generatedUniqueIdWithPrefix('app');
    // const secondId=service.generatedUniqueIdWithPrefix('app');
    const ids=new Set();//NÃO ACEITA DUPLICADOS NÃO PERMITE INSERÇÃO
    for(let i=0;i<50;i++)
    {
      ids.add(service.generatedUniqueIdWithPrefix('app'));

    }
    expect(ids.size).toBe(50);

  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} deve retornar o número de Ids gerados quando chamado`, () => {

    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });


  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} deve puxar quando for chamado vazio `,()=>
  {
    const emptyValues=[null,undefined,'','0','1'];
    emptyValues.forEach(emptyValues=>{
      expect(()=>{service.generatedUniqueIdWithPrefix(emptyValues)})
      .withContext(`Empty value: ${emptyValues} `)
      .toThrow();
    });
  });

});


