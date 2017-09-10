import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class DataStub {

    public testData: any[];

    public getPetitions(): Observable<any[]> {

        return Observable.of(this.testData);

    }
}
