import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent, ButtonDisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener el texto Contador: 0',()=>{
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toEqual('Contador: 0');
  });

  it('valor inicial del contador es 0', () => {
    const counter = new CounterComponent();
    expect(counter.contador).toBe(0);
  });

  it("evento click add", ()=>{
    const compiled = fixture.nativeElement as HTMLElement
    const counterValue = compiled.querySelector('h1')!
    const btnAdd:HTMLElement = fixture.debugElement.nativeElement.querySelector("#add")
    btnAdd.click();
    fixture.detectChanges();
    expect(counterValue.textContent).toEqual("Contador: 1")
  })

  //pruebas al boton dis

  it("evento click dis", ()=> {
    const compiled = fixture.nativeElement as HTMLElement
    const counterValue = compiled.querySelector('h1')!
    const btnDis = fixture.debugElement.nativeElement.querySelector("#dis") as HTMLElement
    btnDis.click()
    fixture.detectChanges();
    expect(counterValue.textContent).toEqual("Contador: -1")
  })


});
