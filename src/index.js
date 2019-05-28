import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import GlobalContext from './components/context/GlobalContext'

ReactDOM.render(
    <GlobalContext>
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    </GlobalContext>
    ,document.getElementById('root'));