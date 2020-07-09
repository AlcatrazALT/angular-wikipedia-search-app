import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResultListComponent } from './page-result-list.component';

describe('PageResultListComponent', () => {
  let component: PageResultListComponent;
  let fixture: ComponentFixture<PageResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
