# GLOSSARY

## General
- **Async:** Makes a function return a promise.
- **Await:** Makes a function wait for a promise; can only be used inside an async function.
- **then():** Returns a promise.
- **Producing code:** Code that can take time.
- **Consuming code:** Must wait for the result.
- **Promise:** Links producing code and consuming code.
- **Response:** Response to a request; data types are script, text, JSON, and XML/HTML. Server to Browser/Client.
- **HTTP:** Hypertext Transfer Protocol, used to structure requests and responses over the internet.
- **Request:** Can be GET, POST, PUT, DELETE. Browser/Client to Server.
- **HTTPS:** HTTP-Secure, which allows encrypting data sent and received.
- **API:** Application Programming Interface. A way for code components inside software to connect and interact privately.
- **Endpoints:** Allows customizing requests to a particular API to achieve a specific result or retrieve specific data.
- **Regex:** Regular expression.
- **status():** A response property that helps error handling; for example, status(200) means success, and status(404) means resource not found.
- **json():** Data type of the response.
- **populate():** Populates reference fields in a documentation of a certain collection with documents from another collection.
- **Cookie:** Data stored in text files on your computer. Cookies were invented to solve the problem of remembering information about the user.
- **State:** Combination of every data we have in the application.
- **trim():** Removes whitespaces.
- **unwrap():** Removes the element's parent and returns the unwrapped content. Commonly used in promises.

## Slices
- **Reducer:** Takes state and action, then returns one entity - a new updated instance of the state.
- **Builder:** Used to define and configure API endpoints in the context of creating an API slice using the Redux Toolkit's.
- **builder.query:** Queries are used to fetch data from the server.
- **builder.mutation:** Mutations typically involve making changes to the server, such as creating or updating data.
- **keepUnusedDataFor:** Indicates how long the data should be kept in the Redux store, even if it is no longer being used.

## Hooks
- **useState():** Lets a component "remember" information like user input.
- **useSelector():** Allows you to extract data from the Redux store state for use in this component.
- **useDispatch():** This hook returns a reference to the dispatch function from the Redux store.
- **Dispatch function:** The only way to trigger a state change.
- **useNavigate():** Moves through pages.
- **useParams():** Lets you read a route's dynamic params filled in by the current URL.
- **useEffect():** Lets a component connect to and synchronize with external systems.
