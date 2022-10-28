import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NppsComponent } from './npps.component';

describe('NppsComponent', () => {
  let component: NppsComponent;
  let fixture: ComponentFixture<NppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
