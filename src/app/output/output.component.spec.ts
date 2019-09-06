import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output value', () => {
    const el = fixture.nativeElement.querySelector('div');

    component.count = 42;
    fixture.detectChanges();
    expect(el.textContent).toContain(42);
  });

  it('should highlight with red color', () => {
    const el = fixture.nativeElement.querySelector('div');

    component.count = -42;
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('lower');
  });

  it('should highlight with blue color', () => {
    const el = fixture.nativeElement.querySelector('div');

    component.count = 42;
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('higher');
  });
});
