import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeetaPage } from './peeta.page';

describe('PeetaPage', () => {
  let component: PeetaPage;
  let fixture: ComponentFixture<PeetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
