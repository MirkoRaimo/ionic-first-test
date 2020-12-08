import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyFirstCardPagePage } from './my-first-card-page.page';

describe('MyFirstCardPagePage', () => {
  let component: MyFirstCardPagePage;
  let fixture: ComponentFixture<MyFirstCardPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstCardPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFirstCardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
