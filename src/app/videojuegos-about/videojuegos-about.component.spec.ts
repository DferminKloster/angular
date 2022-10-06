import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosAboutComponent } from './videojuegos-about.component';

describe('VideojuegosAboutComponent', () => {
  let component: VideojuegosAboutComponent;
  let fixture: ComponentFixture<VideojuegosAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegosAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideojuegosAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
