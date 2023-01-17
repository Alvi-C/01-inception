# 01-inception

Q1: What is Emmet?
A: Emmet is a plugin for text editors that allows for fast HTML and CSS coding using abbreviations and shortcuts. It is also known as Zen Coding. It helps to increase the speed and productivity of a developer. It is available as a plugin for many popular text editors such as Sublime Text, Visual Studio Code, and Atom.

---

Q2: Difference between Library VS Framework?
A: A library is a collection of pre-written code that can be used to perform common tasks. It is a set of functions and methods that can be called upon to perform specific operations. A developer can choose which parts of the library to use in their code and how to use it.

A framework, on the other hand, is a more comprehensive set of libraries that provide a structure for building a specific type of application. It provides a set of conventions for how the code should be organized and how the different components of the application should interact with each other. A developer using a framework is required to follow the structure and conventions set by the framework, and can only use the components provided by the framework.

In summary, a library is a tool that you call upon to perform specific operations, while a framework is a set of conventions and tools to structure the overall architecture of your application.

---

Q3: What is CDN? Why do we use it?
A: A content delivery network (CDN) is a system of distributed servers that deliver web content to a user based on the geographic locations of the user, the origin of the web page and the content delivery server. CDNs are used to improve the performance, scalability, and availability of a website by caching its static assets (such as images, CSS, and JavaScript files) on multiple servers in different geographic locations.

Some of the main benefits of using a CDN are:

    - Improved load times: By delivering content from a server that is geographically close to the user, a CDN can greatly reduce the time it takes for a web page to load.

    - Increased scalability: CDNs can distribute the load of traffic across multiple servers, which can help to prevent a website from crashing or slowing down during periods of high traffic.

    - Improved availability: CDNs can help to ensure that a website remains available even if one of the servers goes down by automatically routing traffic to a different server.

    - Increased security: CDNs can provide a layer of security by protecting a website from DDoS attacks and by preventing hotlinking and bandwidth theft.

    - Cost reduction: CDN reduces the cost of hosting as it reduces the traffic on the origin server and allows to handle huge traffic.

Overall, CDNs are an important tool for optimizing the performance and availability of a website and ensuring that it can handle large amounts of traffic.

---

Q4: Why is React known as React?
A:React is known as React because it is designed to react to changes in the data or user interactions in real time. It is a JavaScript library for building user interfaces, specifically for building reusable UI components. React allows developers to build complex UI using small, simple, and reusable components. These components can be thought of as small, self-contained pieces of code that can be easily reused throughout an application.

The core idea behind React is that when the data or state of a component changes, React automatically updates the UI to reflect those changes in real-time, hence the name React. This allows for a more efficient and performant way of building user interfaces as it avoids the need to manually update the UI every time the data changes.

---

Q5: What is crossorigin in script tag?
A: The "crossorigin" attribute in a script tag is used to specify the CORS settings for that script. CORS stands for "Cross-Origin Resource Sharing," and it is a security feature implemented by web browsers that blocks web pages from making requests to a different domain than the one that served the web page.

The "crossorigin" attribute can take one of two values: "anonymous" or "use-credentials".

    - When set to "anonymous", the browser will make a CORS request with no credentials (cookies, HTTP authentication, and client-side SSL certificates) and will not send the Origin header.
    - When set to "use-credentials", the browser will make a CORS request with credentials and will send the Origin header.

For example, if a script is being loaded from a different domain than the one that served the web page, the following script tag could be used to allow the browser to load the script:

 <script src="https://example.com/script.js" crossorigin="anonymous"></script> -->

It's important to note that the server hosting the script resource should also have the appropriate CORS headers configured to allow the browser to load the resource. The server should have 'Access-Control-Allow-Origin' header set to the domain that is requesting the resource.

---

Q6: What is difference between React and ReactDOM?
A: React and ReactDOM are both libraries developed by Facebook, but they serve different purposes.

    React is a JavaScript library for building user interfaces, specifically for building reusable UI components. It allows developers to build complex UI using small, simple, and reusable components. React provides a set of APIs for creating, manipulating and updating components, it also provide a virtual DOM which makes the manipulation of the real DOM more efficient.

    ReactDOM, on the other hand, is a separate library that provides a way to render React components into the DOM (Document Object Model). ReactDOM is responsible for taking the components created with React and actually rendering them to the web page. It provides a set of APIs for interacting with the DOM, such as "render()" and "unmountComponentAtNode()".

In short, React is a JavaScript library for building UI components, while ReactDOM is a library that provides a way to render those components to the DOM. They are often used together to build web applications with React, but they are separate libraries and can be used independently of each other.

---

Q7: What is difference between react.development.js and react.production.js files via CDN?
A: React.development.js and react.production.js are different builds of the React library that are intended for use in different environments.

    React.development.js is the development version of React, which is intended for use during the development process of a web application. This version of React includes additional features such as error messages and warnings that can help developers diagnose and fix issues in their code. It also includes additional comments and documentation that can help developers understand how the code works.

    React.production.js, on the other hand, is the production version of React, which is intended for use in a live, production environment. This version of React has been minified and optimized for performance, and it does not include the additional features and comments found in the development version. It will be smaller in size than the development version.

---

Q8: What is async and defer?
A: "async" and "defer" are both HTML attributes that can be used to specify how a script should be loaded and executed by a web browser.

    "async" tells the browser to download the script in the background, and then execute it as soon as it is available. This means that the script can be executed while the page continues to load.

    "defer" tells the browser to download the script in the background, but to wait to execute it until the page has finished loading. This means that the script will be executed after all the other resources on the page have loaded.

In summary:
async allows the script to execute as soon as it is available, potentially before the page has finished loading.
defer waits to execute the script until the page has finished loading.

It's important to note that defer scripts are executed in the order they appear in the HTML, while async scripts are executed as soon as they are available, regardless of the order in which they appear in the HTML.
