This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


Description of your project, including,
- Problem definition / purpose
- Functionality / features
- Screenshots
- Tech stack (e.g. html, css, deployment platform, etc)  
  - Client side  
    - Markup language: html, CSS  
    - Scripting language: Javascript  
    - Framework: React.js, Node.js  
    - Deployment platform:  
  - Server side  
    - Server language: Javascript  
    - Framework: Express.js, Mongoose, Node.js  
    - Deployment platform:
  - Operating system: macOS Mojave Version 10.14.4
  - Cloud storage: GitHub, 
  - Database: MongoDb




<hr>
Instructions on how to setup, configure, deploy and use your App.  
<hr>

Design documentation including,
- Design process  
  
  Tuesday 9/7  
  -Challenges  
  -ERD - creating relationships with collections. 

  Wednesday 10/7
  - challenges
  - finding an API with appropriate image resolution

- User stories
- A workflow diagram of the user journey/s.
- Wireframes
- Database Entity Relationship Diagrams  

![erd_V1](https://user-images.githubusercontent.com/47741682/60852110-a8c79b00-a239-11e9-8597-ce22f15f3850.jpg)  

![erd_V2](https://user-images.githubusercontent.com/47741682/60930074-4e8d0f80-a2f7-11e9-82a7-a6a3a747f36d.jpg)  



- Data Flow Diagram
- OO design documentation  
 
Details of Project Management & Planning process including,
- Project plan & timeline  
 
Day | Date | Tasks | Tasks completed | Blocks | Completed by  
--- | --- | --- | --- | --- | ---  
Mon | `08 July` | --- | --- | --- | ---
Tues | `09 July` | --- | --- | --- | --- 
Wed | `10 July` | --- | --- | Finding appropriate API for images | --- 
Thu | `11 July` | Anna:High fidelity wireframes, Rob: backend deployment, Gary: backend routes/controllers | --- | --- | ---
Fri | `12 July` | --- | --- | --- | ---  
  

Day | Date | Tasks | Tasks completed | Blocks | Completed by  
--- | --- | --- | --- | --- | ---  
Mon | `15 July` | --- | --- | --- | ---
Tues | `16 July` | --- | --- | --- | --- 
Wed | `17 July` | --- | --- | --- | --- 
Thu | `18 July` | --- | --- | --- | ---
Fri | `19 July` | --- | --- | --- | ---  

Day | Date | Tasks | Tasks completed | Blocks | Completed by  
--- | --- | --- | --- | --- | ---  
Mon | `22 July` | --- | --- | --- | ---
Tues | `23 July` | --- | --- | --- | --- 
Wed | `24 July` | --- | --- | --- | --- 
Thu | `25 July` | --- | --- | --- | ---
Fri | `26 July` | --- | --- | --- | ---




  
- Client communications
- Screenshots of Trello board(s)  

<img width="1387" alt="Initial Trello setup" src="https://user-images.githubusercontent.com/47741682/60783453-128a6b00-a18e-11e9-9860-b70082e9da1f.png">  
 
Answers to the Short Answer questions (Section 2.2)  
  
1. What are the most important aspects of quality software?  

Quality software describes the desirable attributes of software products and has been detailed in the international standard for the evaluation of software quality => ISO/IEC 25010:2011 (Systems and software engineering -- Systems and software Quality Requirements and Evaluation (SQuaRE) -- System and software quality models) and can be graphically represented as;

<img width="638" alt="iso" src="https://user-images.githubusercontent.com/47741682/60784884-289b2a00-a194-11e9-9e99-5e373187b0c5.png">

Therefore Software quality characteristics can include;

*Functional suitability*  
The software correctly performs the tasks it’s intended to do for its users. Functional requirements specify what a system/product should do. e.g. A store system should provide the customer with an overview of what they have already purchased.

*Scalability*  
Scalability is the ability of the system to handle load increases without decreasing performance, or the possibility to rapidly increase the load.  
The two ways to improve scalability are;  
vertical: adding more resources such as memory, disks or processors.
horizontal: increase the number of computing units and divide the load.   

*Usability*  
Usability is a controlled aspect of User Experience design that ensures the end-user doesn’t encounter problems with the use of a product or website’s user interface. The three main enhancements to the end-users experience from a usable product are efficiency, effectiveness and ultimately satisfaction.  
User interfaces are the only visible parts of software according to the viewpoint of user. So, simplicity, taking less time to complete a job, fast learnability etc. are very important. The most well known principle for this usability is KISS (Keep It Simple Stupid). Simple is always the best. A usable software should also support different accessibility types of control for people with disabilities.  
Usability can compete with security. e.g. Entering a 30-digit password would increase security but compromise user experience.

*Performance efficiency*  
The relationship between the level of performance of the software and the amount of resources used, under stated conditions.  Performance is mostly about the response time of the software. This response time should be in acceptable intervals (e.g. max. a few seconds), and should not increase if the transaction count increases.  
Performance issues grow into problems that can affect many systems; from the server’s capacity, to the efficiency of database queries or the capacity of communication channels.  
Performance can compete with security. e.g. Using a more expensive encryption algorithm would increase security but also increase the services’ response time.

*Security*  
Security is responsible for the ability of the system to reduce the likelihood of malicious or accidental actions as well as the possibility of theft or loss of information. Several measures that are used to protect systems include: authentication and encryption.
Within the application, examples of security includes;  restrictions of user access by authentication, encryption of password and secure connection.   

*Maintainability*  
Maintainability is the ability of the system to support changes. It should be easy to add code to existing code, easy to upgrade for new features and new technologies(with respect to changes in business requirements).  

*Reliability*  
A set of attributes that bear on the capability of software to maintain its level of performance under stated conditions for a stated period of time. Product reliability is measured in terms of the software working under different working environments and conditions. 

*Testability and Manageability*  
Testability shows how well the system allows performing tests, according to predefined criteria.  Testability makes it possible to effectively divide the system into subsystems. This ensures that the code is well structured, making testing easy. 


Overall, quality software is a well-defined process for creating a useful product that adds value for both the consumer and the manufacturer.
=======
### `npm start`


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
