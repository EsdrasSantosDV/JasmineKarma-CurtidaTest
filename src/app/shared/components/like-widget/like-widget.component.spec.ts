import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniqueIdService } from '../../services/unique-id/unique-ide.services';
import { LikeWidgetComponent } from './like-widget.component';
describe(LikeWidgetComponent.name,()=>{

  //ELE NÃO E UMA INSTANCIA DO LIKJE
  let fixture:ComponentFixture<LikeWidgetComponent>=null;

  beforeEach(async ()=>
  {
    //O ANGULAR PARA DE FAZER SENTIDO DESSA FORMA CRIANDO OS COMPONETES ASSIM
    //PQ O ANGULAR CRIA UMA INSTANCIA
    //component=new LikeWidgetComponent(new UniqueIdService());
    await TestBed.configureTestingModule({
      declarations:[LikeWidgetComponent],
      //COMO TEM O UNIQUE SERVICE
      providers:[UniqueIdService],
      imports:[FontAwesomeModule]
    }).compileComponents();

    fixture=TestBed.createComponent(LikeWidgetComponent);

  });

  it('Should create component',()=>
  {
    const instance=fixture.componentInstance;
    expect(instance).toBeTruthy();
  });


});
