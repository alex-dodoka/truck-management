import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class AppFirestoreService {

  constructor(private http: HttpClient, private db: AngularFirestore) {
    console.log()
  }

  public getList(table) {
    return this.db
      .collection(table)
      .valueChanges();
  }

  public getOne(table, id) {
    return this.db
      .doc(`${table}/${id}`)
      .valueChanges();
  }
}
