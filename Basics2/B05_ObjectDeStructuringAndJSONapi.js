
// de-Structure in JavaScript
// Syntactical suger

const course = {
    coursename: "JavaScript By Mukul",
    price: "1024",
    courseinstructor: "Mukul Kumar"
}

// to access any key:value we usually do course dot
// console.log(course.courseinstructor);

// Every time to access the element we need to mantion course but we have a better way
const { courseinstructor: Instructor } = course;

// console.log(Instructor);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ API ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*

Definition:

Application Programming Interface (API) is a set of rules and protocols that allows different software applications to communicate with each other.
Types of APIs:

Web APIs: APIs that are accessed over the web using HTTP.
RESTful APIs: Representational State Transfer APIs that adhere to REST architectural principles.
SOAP APIs: Simple Object Access Protocol APIs, which use XML-based messaging protocol for communication.
GraphQL APIs: Query language for APIs, allowing clients to request only the data they need.
HTTP Methods:

APIs typically use HTTP methods like GET, POST, PUT, DELETE to perform CRUD operations (Create, Read, Update, Delete) on resources.
Authentication:

APIs often require authentication to ensure secure access to data. Common authentication methods include API keys, OAuth, and JWT (JSON Web Tokens).
Data Formats:

APIs commonly use data interchange formats like JSON (JavaScript Object Notation) and XML (eXtensible Markup Language) to exchange data between client and server.
Endpoints:

APIs expose endpoints, which are specific URLs representing resources. Each endpoint typically corresponds to a specific function or piece of data.
Request and Response:

Clients make requests to API endpoints, specifying the HTTP method and any required parameters.
APIs respond to requests with data in the requested format (e.g., JSON or XML), along with an appropriate HTTP status code.
Versioning:

APIs may have version numbers in their URLs to allow for updates and changes without breaking existing client implementations.
Rate Limiting:

APIs may impose rate limits to prevent abuse or overload. Rate limiting restricts the number of requests a client can make within a given time period.
Documentation:

Good API documentation is essential for developers to understand how to use the API effectively. It typically includes details on endpoints, request and response formats, authentication, and usage examples.
Testing and Debugging:

Developers often use tools like Postman or cURL for testing API endpoints and debugging issues.
Security:

APIs need to be secure to prevent unauthorized access, data breaches, and other security threats. Security measures include encryption (HTTPS), input validation, and access controls.
Error Handling:

APIs should provide clear error messages and appropriate HTTP status codes to indicate the nature of any errors encountered during request processing.
Cross-Origin Resource Sharing (CORS):

CORS is a security feature implemented by web browsers to restrict web pages from making requests to APIs hosted on different domains. APIs can enable CORS to allow requests from specific origins.
Frameworks and Libraries:

Developers often use frameworks and libraries like Express.js (for Node.js), Flask (for Python), and Django REST Framework to build and manage APIs efficiently.
Scaling:

APIs need to be designed for scalability to handle increased traffic and load. Techniques such as load balancing, caching, and horizontal scaling are common strategies for scaling APIs.
Monitoring and Analytics:

Monitoring tools help developers track API performance, uptime, and usage metrics. Analytics provide insights into how the API is being used and help identify areas for improvement.
Version Control:

Like any other software component, APIs benefit from version control using systems like Git to manage changes, track history, and collaborate with other developers.
These points cover various aspects of APIs in web development, from basic concepts to more advanced topics related to security, scalability, and maintenance.

*/


/*
Let's say we have an API endpoint that provides information about books. When you make a request to this endpoint, you might receive a JSON response like this:
{
    "books": [
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "published_year": 1925,
            "genre": "Fiction"
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "published_year": 1960,
            "genre": "Fiction"
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "published_year": 1949,
            "genre": "Dystopian"
        }
    ]
}
This JSON response contains an array of books, where each book is represented as an object with attributes like title, author, published_year, and genre.
*/
/*
// Define the API endpoint URL
const url = "https://example.com/api/books";

// Make a GET request to the API endpoint
fetch(url)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (response.ok) {
      // Parse the JSON response
      return response.json();
    } else {
      // Handle error if request was not successful
      throw new Error(`Error: ${response.status}`);
    }
  })
  .then(data => {
    // Loop through the list of books and print their information
    data.books.forEach(book => {
      console.log("Title:", book.title);
      console.log("Author:", book.author);
      console.log("Published Year:", book.published_year);
      console.log("Genre:", book.genre);
      console.log();
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error(error);
  });
In this JavaScript code:

We use the fetch() function to make a GET request to the API endpoint.
We use promises to handle the asynchronous nature of the fetch operation.
If the response is successful (status code 200), we parse the JSON response using the .json() method.
We then loop through the list of books in the JSON response and print their information.
If an error occurs during the fetch operation, we catch it and handle it appropriately.
*/
