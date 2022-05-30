import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


// Steps for authentication 

// ---------------------------

/*
step----1
1) firebase create project.
2)create web app.
3)get configuration.
4)initialize firebase.
5)enable auth method.
------------------------------------------
step----2

1)create login component.
2)create register component.
3)create route for login and register.
----------------------------------------------

step----3

1)set up sign in method.
2)set up sign out method.
3)user state.
4)special observer.
5)return necessary methods and states from useFirebase.

------------------------------------------------

step----4

1)create a auth context.
2)create a context provider.
3)set context provider context value.
4)use auth provider.
5)create use auth hook.

-----------------------------------------------------
step----5
1) create private route.
2) set private route.

*/