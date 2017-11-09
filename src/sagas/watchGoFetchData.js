import { put, takeEvery } from 'redux-saga/effects';

import graphFetch from '../graph-fetch';

const fetch = graphFetch('http://localhost:5200/graphql');

export default function* watchBasketAllocateStart () {
    yield takeEvery('GO_FETCH_DATA', function* () {

        const query = `
        query Domain($path_0:String!) {
campaignPathLookup(path:$path_0) {
  campaign {
    id,
    status
  }
}
}
        `;

        const queryVars = {
          path_0: 'demofest',
        };

        const opts = {
          // custom fetch options
        };

        fetch(query, queryVars, opts).then(data => {
          console.log(data);
          yield put({ type: 'UPDATE_STORE', value: data });
        });
    });
};
