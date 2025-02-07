# Intro

This example demonstrates how to share React Context between Host and Remote App by using shared library.

- `host` is the host application and it's wrapped with `NavContext`
- `remote` is standalone application that consumes `NavContext` and can update its values.
- `shared` is a library that is shared between `host` and `remote` applications. This lib contains `NavContext`.

# Running The Apps

1. Install dependencies: `npm i`
2. Start the apps: `npm run start`

Apps are running:

- `host`: http://localhost:3000
- `remote`: http://localhost:3001

# Demo

Once the apps are running, you will land on the home page with links to the remote apps.

The first link navigates to the remote app that is imported directly from `./src/App.tsx`.

1. Click on the `Go to remote app` button.
2. Note: See the input field prefilled with the value provided from the host app.
3. Change the value and click the `Save` button.
4. Note: The title of the top navigation has been updated.

You can either go back using the `Go Back` button or navigate to the root and perform a hard refresh.

The second link navigates to the remote app that is bridged using the `@module-federation/bridge-react` utilities. `(./Bridged: ./src/export-app.tsx)`

1. Click on the `Go to remote bridged app` button.
2. Note: See the input field prefilled with the value provided from the host app.
3. Update the value and click the `Save` button.
4. Note: The title of the top navigation has been updated.

When working with the bridge components, the context needs to be passed as a prop, and a new context has to be created.
Context is held within the app tree of the React itself.

# Conclusion

In conclusion, this example successfully illustrates how to share React Context between a host and a remote application using a shared library.

The demo showcases two approaches: direct import and module federation bridging, with the latter requiring context to be passed as a prop and a new context to be created.
