import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, finishBookReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';


@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    

    this.store.dispatch(removeFromReadingList( {item} ));
    //const snackBarRef = this._snackBar.open("Removed from  Reading List","Undo", { duration: 3000 });
    //snackBarRef.onAction().subscribe(()=>this.store.dispatch(addToReadingList({ book })) )
  }

  finishFromReadingList(test:ReadingListItem) {
    let now = new Date();
    let item : ReadingListItem = {bookId:test.bookId,...test};
    item.finished = true;
    item.finishedDate =now.toDateString();
    this.store.dispatch(finishBookReadingList({item} ));
  }
 
}
