import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs/operators";
import * as appActions from "../actions/app.actions";
import * as learningActions from "../actions/learning.actions";
@Injectable()
export class AppEffects {

  // logIt$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   ), { dispatch: false }
  // );

  loadLearningDataApplicationStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => learningActions.loadLearningData())
    ), { dispatch: true }
  );
  constructor(private actions$: Actions) {
  }
}
