import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class AuthStub {

    public testData: any;

    get user(): Observable<any> {
        return Observable.of(this.testData);
    }

    public getUser(): Observable<any> {

        return Observable.of(this.testData);

    }

}
