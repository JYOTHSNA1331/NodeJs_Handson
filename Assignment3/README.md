# 1. What is Middleware in Node
The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
Middleware functions can perform the following tasks:
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

### An Express application can use the following types of middleware:
Application-level middleware<br>
Router-level middleware<br>
Error-handling middleware<br>
Built-in middleware<br>
Third-party middleware
