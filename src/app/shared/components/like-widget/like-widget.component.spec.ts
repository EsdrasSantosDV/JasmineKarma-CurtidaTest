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

  it('Should create component',()=>
  {

    expect(component).toBeTruthy();
  });

  it('Should auto generate Id when id input property is missing',()=>
  {

    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate Id when id input property is present',()=>{

    const someId='someId';
    component.id=someId
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`,done=>
  {
    fixture.detectChanges();
    component.liked.subscribe(()=>{
      expect(true).toBeTrue();
      done();
    });
    component.like();
  });


});
