import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

import { PersonComparatorComponent } from './person-comparator.component';
import { fromPersons, comparisonActions } from 'src/app/state';
import { CompareTypes } from 'src/app/types/enums';

describe('PersonComparatorComponent', () => {
  let component: PersonComparatorComponent;
  let fixture: ComponentFixture<PersonComparatorComponent>;
  let store: Store<fromPersons.State>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ PersonComparatorComponent ],
      providers: [Store]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(PersonComparatorComponent);
      component = fixture.componentInstance;
      store = TestBed.get(Store);
      spyOn(store, 'dispatch');
      fixture.detectChanges();
    });
  }));

  describe('When reset button is clicked', () => {
    beforeEach(() => {
      const btn = fixture.debugElement.query(By.css('#reset'));
      btn.nativeElement.click();
    });
    it('should dispatch a comparison action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new comparisonActions.CompareAction(CompareTypes.Person));
    })
  })
});