import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListearticleFilsComponent } from './listearticle-fils.component';

describe('ListearticleFilsComponent', () => {
  let component: ListearticleFilsComponent;
  let fixture: ComponentFixture<ListearticleFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListearticleFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListearticleFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
