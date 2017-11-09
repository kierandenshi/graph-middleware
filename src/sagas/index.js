import { fork, all } from 'redux-saga/effects';
import watchGoFetchData from './watchGoFetchData';

export default function* root () {
    yield all([
        fork(watchGoFetchData),
    ]);
}
