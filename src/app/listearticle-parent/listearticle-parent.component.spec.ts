import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListearticleParentComponent } from './listearticle-parent.component';

describe('ListearticleParentComponent', () => {
  let component: ListearticleParentComponent;
  let fixture: ComponentFixture<ListearticleParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListearticleParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListearticleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
