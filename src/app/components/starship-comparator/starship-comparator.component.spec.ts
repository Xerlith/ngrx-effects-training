import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { StarshipComparatorComponent } from './starship-comparator.component';
import { fromStarships, comparisonActions } from 'src/app/state';
import { Button } from 'protractor';
import { CompareTypes } from 'src/app/types/enums';


describe('StarshipComparatorComponent', () => {
  let component: StarshipComparatorComponent;
  let fixture: ComponentFixture<StarshipComparatorComponent>;
  let store: Store<fromStarships.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ StarshipComparatorComponent ],
      providers: [Store]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(StarshipComparatorComponent);
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
    it('should dispatch an action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new comparisonActions.CompareAction(CompareTypes.Starship));
    })
  })
});
