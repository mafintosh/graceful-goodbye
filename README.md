# graceful-goodbye

Run cleanup logic just before the process exits without interfering with other process handlers.

```
npm install graceful-goodbye
```

## Usage

``` js
import goodbye from 'graceful-goodbye'

goodbye(async function () {
  console.log('i am run before exit')
})
```

## API

#### `const unregister = goodbye(beforeExit)`

Register an async function to be run before process exit.

* Ran when SIGTERM/SIGINT is received
* Ran if the event loop is about to end

If a process signal is received and `graceful-goodbye` is the only signal handler it mimicks the default behaivour of exiting
the process when the exit handlers has run with a 130 exit code. If other handlers are registered, it defers to them to exit the process.

All handlers are deregistered when the beforeExit method runs, which means if the user sends two SIGINTs the second one will always exit the process immediately, assuming no other handlers are registered.

Note that the function is NOT run if the user calls process.exit or if an unhandled error occurs - this is by design.
Those events should exit the process in the same tick as their occur.

## License

MIT
