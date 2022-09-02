import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniqueIdService } from '../../services/unique-id/unique-ide.services';
import { LikeWidgetComponent } from './like-widget.component';
describe(LikeWidgetComponent.name,()=>{

  //ELE NÃO E UMA INSTANCIA DO LIKJE
  let fixture:ComponentFixture<LikeWidgetComponent>=null;
  let component:LikeWidgetComponent=null;

  beforeEach(async ()=>
  {
    //O ANGULAR PARA DE FAZER SENTIDO DESSA FORMA CRIANDO OS COMPONETES ASSIM
    //PQ O ANGULAR CRIA UMA INSTANCIA
    //component=new LikeWidgetComponent(new UniqueIdService());
    await TestBed.configureTestingModule({
      declarations:[LikeWidgetComponent],
      //COMO TEM O UNIQUE SERVICE
      providers:[UniqueIdService],
      imports:[FontAwesomeModule],
    }).compileComponents();

    fixture=TestBed.createComponent(LikeWidgetComponent);
    component=fixture.componentInstance
  });

  it('Deve criar componente',()=>
  {

    expect(component).toBeTruthy();
  });

  it('Deve gerar ID automaticamente durante NgOnInit quando {@Input id} não for atribuído',()=>
  {

    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Não deve gerar ID automaticamente durante ngOnInit quando {@Input id} não estiver atribuído',()=>{

    const someId='someId';
    component.id=someId
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  //TESTA O LIKE
  it(`#${LikeWidgetComponent.prototype.like.name} deve acionar (@Output like} quando chamado`,()=>
  {
    spyOn(component.liked,'emit');//ESPIONA O METODO EMIT
    fixture.detectChanges();
    component.like();
    //CHAMOU O METOOD AGORA,E TO PERGUTNA SE O METODO FOI CHAMADO OU NÃO
    expect(component.liked.emit).toHaveBeenCalled();

  });


});
