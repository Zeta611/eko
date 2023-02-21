open Firebase

let uiConfig = {
  "signInFlow": "popup",
  "signInOptions": [Auth.GoogleAuthProvider.providerID],
  "callbacks": {
    "signInSuccessWithAuthResult": () => false,
  },
}

@react.component
let make = () => {
  let {status, data} = useSigninCheck()

  let firestore = useFirestore()

  React.useEffect1(() => {
    // Js.Console.log(data)
    switch data {
    | None => ()
    | Some({signedIn, user}) =>
      if signedIn {
        switch user->Js.Nullable.toOption {
        | Some({uid, displayName, email, photoURL}) =>
          // Set uid. This is safe due to the security rule:
          // allow write: if request.auth.uid == uid;

          (
            async () => {
              let userDocRef = firestore->doc(~path=`users/${uid}`)
              // let userDoc = await userDocRef->getDoc
              // if !userDoc.exists(.) {
              await userDocRef->setDoc({
                "displayName": displayName,
                "email": email,
                "photoURL": photoURL,
              })
              // }

              switch displayName {
              | Some(_) => RescriptReactRouter.replace("/")
              | None => RescriptReactRouter.replace("/profile")
              }
            }
          )()->ignore

        | None => () // Something went wrong
        }
      }
    }
    None
  }, [data])

  // This uses a v8 auth instance
  // See https://github.com/FirebaseExtended/reactfire/discussions/474
  let app = FirebaseCompat.firebase->FirebaseCompat.initializeApp(useAuth().app.options)
  let firebaseAuth = app->getAuth

  switch status {
  | #loading =>
    <div className="h-screen grid justify-center content-center">
      <Loader />
    </div>

  | #success =>
    switch data {
    | None | Some({signedIn: true}) => React.null
    | Some({signedIn: false}) =>
      <div
        className="h-screen bg-cover bg-center bg-[url('/assets/layered-waves.svg')] justify-self-stretch grid justify-center content-center">
        <div
          className="h-96 w-96 bg-zinc-50 bg-opacity-30 backdrop-blur-lg drop-shadow-lg rounded-xl grid content-center gap-3 text-zinc-800 dark:text-zinc-50">
          <div className="text-3xl font-medium text-center"> {React.string(`로그인`)} </div>
          <StyledFirebaseAuth uiConfig firebaseAuth />
        </div>
      </div>
    }
  }
}
