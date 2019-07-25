# Real World Application (A3-1)
Robert De Matteo,  Gaurav Pathak, Anna Roszko

## Live app link:
https://

## GitHub repository link:
Backend link: https://github.com/rdematteo/book-blog-backend-MERN-CA  
Frontend link: https://github.com/rdematteo/book-blog-frontend-MERN-CA

## Figma links:
Low-fidelity wireframes: https://www.figma.com/file/NZdoBtSAtsovgR2CCKS3wZtd/BookApp_lowFidelity?node-id=0%3A1

High-fidelity wireframes: https://www.figma.com/file/CxwRRn92Ly7DSMmDF9OxdH/BookApp_highFidelity?node-id=0%3A1

___

# Project Description:

## Problem definition / purpose

Our Application is a custom product for Jaclyn Crupi.

Jaclyn is a book reviewer and book seller and this App is a place for her to collect her reviews with the added functionality of users being able to purchase the book upon reading the review (as well as other features). Our App creates a direct connection between both sides of her professional life – reviewing and selling books. 

Jaclyn told us about a prominent use case, where people often read her reviews on mobile while browsing in a bookshop to determine which book to buy, therefore it was important to optimise the App for mobile use.

Jaclyn reads and reviews approximately 200 new release books every year so our App had to have the ability to sort data into different categories and have the ability to scale into the future. 

Jaclyn has a popular Instagram account where she posts her reviews so it was important for us to add extra value for Jaclyn when designing and building this App. 
___

[ * Add screenshots of mobile and desktop app - Anna ]

___

## Functionality / features

Customer-facing experience:

- Home page:
  - Includes navigation bar with links to:
    - About me
    - Reviews by genre
    - Reviews by year
    - Top Picks
    - Subscribe
  - Included in the navigation bar is a search function where a user can find a book review by title (MVP).
  - The home page also includes a display grid of reviews in chronological order - most recent first.
  - The footer includes contact information.

- Show page:
  - Upon selecting 'read more' from any of the reviews from the display grid, the user is taken to a show page which gives complete information about the review - including all the book information and the purchase functionality. 

- About me:
  - A brief bio about Jaclyn and her contact information. 

- Reviews by genre:
  - This link has a dropdown to sub-categories of genres:
    - In translation
    - Short Stories
    - Essays
    - Narrative Non-Fiction
    - Crime
    - Graphic Novels
    - Contemporary Fiction
    - Australian Fiction
    - Memoir
    - Young Adult (YA)
   - By selecting which genre the user wants the respective page filters the display grid of reviews based on their choice.  

- Reviews by year:
  - This link has a dropdown of years, currently the only year displayed is 2019 but it has the functionality to scale in the future to sort into years by publishing date. This feature is important as Jaclyn often tries to read 200 books per year so it's an easy way for her and her users to filter the reviews. 

- Top Picks:
  - When Jaclyn creates a review she has the ability to assign a 'top pick' label to a book. The Top Picks page displays all of her highly recommended titles within the display grid. 

- Subscribe:
  - Users of the site have the option to subscribe to Jaclyn's App to receive information directly to their email inbox. The subscribe functionality is set up through Mailchimp which Jaclyn already uses, and gives her analytic insights. 

Admin experience:

- Login:
  - For security, Jaclyn is provided with a protected URL which is not visible through the customer-facing pages.
  - She is prompted to sign in and has the option to reset her password (validated through her email) in case she forgets her password.

- Admin Show page:
  - Upon logging in, Jaclyn is directed to the Admin show page, where all her reviews are listed in chronological order - most recent first. 
  - Also included is a navigation bar with links to:
    - Create new review
    - See all reviews
    - Logout
  - Also included in the navigation bar is a search by book title functionality.
  - The admin show page displays all book reviews and has the functionality to delete or edit each review.

- Create new review:
  - This is where Jaclyn has the ability to create new reviews.
  - The navigation bar lets Jaclyn toggle between all reviews and create review.
___

## Tech stack
 
- Client side  
  - Markup language: HTML, CSS  
  - Scripting language: Javascript  
  - Framework: React.js, Node.js  
  - Deployment platform: Netlify
- Server side  
  - Server language: Javascript  
  - Framework: Express.js, Mongoose, Node.js  
  - Deployment platform: Now
- Operating system: macOS Mojave Version 10.14.4
- Cloud storage: GitHub, AWS S3
- Database: MongoDb
___

## Instructions on how to setup, configure, deploy and use your App
In this section I will describe how to setup a local deployment of our app.  
1. Fork the GitHub application  
 You will require to fork both front and backends.  
 Obtain links from:  
 Front end: https://github.com/rdematteo/book-blog-frontend-MERN-CA  
 Back end: https://github.com/rdematteo/book-blog-backend-MERN-CA

2. Create a new directory  
 Git clone both links above in this new directory  

3. Setup Backend 
 - After step 2 run: `npm i` to install dependencies  
 **For local environment**  
  Create a .env file and include your own variable for the following keys:  
  *Set url to connect to mongo database*  
  DB_URL=  
  *Set a JWT secret*  
  JWT_SECRET=  
  *Provide MailChimp variables and valid email and password for email client*  
  MAILCHIMP_KEY=  
  MAILER_EMAIL_ID=
  MAILER_PASSWORD=  
  *Set access varibales fro AWS S3*  
  ACCESSKEYID=  
  SECRETACCESSKEY=  
  *Set url for local host for React (front end)*  
  REACT_APP_API_URL=  
  MAILER_SERVICE_PROVIDER??? -GARY to advise

    **For production environment**  
    Create an account with  
    - Now (https://zeit.co/now). Now is used to deploy production environment but you could use your own deployment service.  
    - MongoDB Atlas (https://www.mongodb.com/cloud/atlas)    
    *If you use now, create and setup now.json file in root directory*   
    Set the same variables as above.   
    *In addition you will require to add the following variable to the now.json file*  
     MAILER_SERVICE_PROVIDER=
     
  - start the mongo server, and the express server  
  


  4. Setup Frontend 
 - After step 2 run: `npm i` to install dependencies  
**For local environment**  
  Create a .env.development file and include your own variable for the following keys:  
  *Set url for local host for React (front end)*  
  REACT_APP_API_URL=  


    **For production environment**  
    Create an account with  
    - Netlify (https://zeit.co/now). Netlify is used to deploy production environment but you could use your own deployment service.  
  - start the react server  

5. App usage   
  
    **For users**
    Home page: navigate to https://jaclyn.netlify.com/home  
    Here you can view recent book reviews and search for a recent review in the search bar.  
    Users can also sort reviews by Genre, Year and Top Pick on the same webpage.  
    Users can also subscribe to a newsletter. 
    If a user is interested in a certain book, a link is available to but the book for the client's bookstore.  
  
      **For Admin users**
      Home page: navigate to https://jaclyn.netlify.com/adminjaclyn 
      Enter username and password for access to protected admin dashboard.  
      Admin user can reset password if forgotten from this webpage  
      When the username and password have been authenticated, the admin user has access to the admin dashboard.  
      In the admin dashboard, admin can view all the reviews in the same view and easy access to edit and delete.  
      In the toolbar, admin can create a new review.  
      The admin can also logout for the toolbar. Admin will be re-directed to https://jaclyn.netlify.com/adminjaclyn 

___

# Design documentation:

## Design process:
  
The books that Jaclyn reviews are all new releases and quite literary. It was important to create a sophisticated design but still maintain a fun and welcoming look and feel.

It was important to capture Jaclyn's personality in the branding of the App. While she has sophisticated taste in literature she is also a colourful and fun personality, excited to chat to anyone about the books she loves.

The visual branding of the App is a simple dark grey on white with the use of a serif font to replicate the feeling of reading a printed book. Color was added throughout in the display reviews grid to distinguish the individual items in the grid but also to add visual interest. 

The admin area is distinguished by a secondary light teal colour, so it's visually clear for Jaclyn where in her site she is at any given time. 

It was also important to have a lot of 'white space' to create a sense of spaciousness and sophistication.

[ * Low- fidelity wireframes - Anna ]

[ * High-fidelity wireframes - Anna ]

## Design process stage 1:

The initial idea for the App was discussed over the phone. Jaclyn was provided with the project scope, and a clear understanding of our capabilites and timeframe. Jaclyn was excited to get involved as Anna and Jaclyn have been discussing creating an App for quite some time.

## Design process stage 2:

After the initial phone conversation, Anna began to design low-fidelity wireframes, working out the basic pages and functionality of the App. These low-fidelity wireframes were presented to Jaclyn in a face-to-face meeting where we discussed them in detail. This was an opportunity to ascertain which features Jaclyn would need and which were less important, it also gave Jaclyn an opportunity to offer insights into how she interacts with her readers/users and specific requests. This was an important collaborative step which was made easier by having visual wireframes to reference. 

## Design process stage 3:

After the first client meeting, Anna began designing the high-fidelity wireframes, refining functionality based on Jaclyn's input and creating a 'look and feel' for the App which included colour palettes, fonts and layouts. These were shown to Jaclyn in a second face-to-face meeting where the design was approved. The second meeting was also an opportunity for us to clarify some technical / functional aspects of the App with Jaclyn. 

## User stories: 

- User 1: Person who rarely buys books, wants to buy a book online that is recommended from a specific genre for personal use.
- User 2: Person who wants to buy a gift for a book-loving friend in-person at a bookshop, they are not sure what to buy and want to make an informed choice. 
- User 3: Industry professional has read other reviews and wants Jaclyn's opinion for professional reasons.  
- User 4: Busy user doesn't spend much time on Jaclyn's App but wants to stay up-to-date with new releases and reviews so wants to join her mailing list.
- User 5: It's the end of the year and the user wants to know what were Jaclyn's highlights from all new releases that year.   


## A workflow diagram of the user journey/s:

![User flow diagram](https://raw.githubusercontent.com/annarosz/temp/master/bookmarks_user_journeys.jpg)  

## Database Entity Relationship Diagram:  

![Database ERD](https://user-images.githubusercontent.com/47741682/60852110-a8c79b00-a239-11e9-8597-ce22f15f3850.jpg)  

## Data Flow Diagram

[ Garry]

## OO design documentation  

Object-oriented (OO) design is the process of planning a system of interacting objects for the purpose of solving a software problem. It also improves the reusability of software components - a distinctive feature of React. We have tried to make use of this reusability concept across our software design.  As seen in the figure below, we have constructed a myriad of dumb components (light blue section) and utilized these in our smart components (yellow shading).  These components are connected to user/private/protected routes which are feed into the App.js file. The App.js file then handles all routes and enables display of data into user and admin view pages. Using this convention, props were able to be passed from one component to the next component, and used in their appropriate places. 
We have used an external component - Mailchimp - to handle newsletter subscription services.


![oo_design](https://user-images.githubusercontent.com/47741682/61788144-b6456d80-ae54-11e9-9008-c4587c261c37.jpg)


___

# Details of Project Management & Planning process:

## Demonstrate your project management skills:

When we first started working as a team, our initial discussion was about what our strengths and weaknesses were, reflecting on our previous project – what went well and what we'd like to do differently. Based on this discussion we determined roughly what our roles would be for the duration of the project:

- Anna: Project management / design / front-end
- Rob: Generalist - across it all
- Garry: Back-end / Testing

We also decided on our working style, and agreed that we'd prefer to work together as a team and do as much pair-programming as possible. Working alongside each other allows for clear communication and easier troubleshooting. When it was not possible to pair-program (due to lack of time) we decided to regularly check-in with other – in person, and checking code – so we all knew what we were all doing at any given time. 

We set up our Trello boards(see figures below) and spent the first few days planning. Rob and Garry kept busy with preparation while Anna met with the client and got the go-ahead for the project. 

## Use Agile development methodologies
We agreed to meet everyday at 9.30 to discuss where we were at with our tasks and reassess the scope for that day's work and what to share for our daily stand-up. As well as having a daily check-in, we were all clear on what our expectations were for each week and what we were working towards. This allowed us to monitor progress and adjust our expectations if necessary.  
In addiiton we participated in the 10.00am stand-up, part of the Agile development methodologies to describe completed work, any blockers and work-to-do.


## GitHub - Demonstrate use of frequent commits, feature branches (based on user stories), pull requests and merges
As of Thursday 24 July our team committed 153 to the backend and 93 times to the backend. 

![Github_commit-frontend](https://user-images.githubusercontent.com/47741682/61792256-abdca100-ae5f-11e9-92e2-6eff3916a37c.png)

![Github_commit_backend](https://user-images.githubusercontent.com/47741682/61792346-dfb7c680-ae5f-11e9-903f-a8582f1b4bf0.png)

Although difficult to demonstrate evidence of branch names (best practice is to delete branches after committing!! ), a snap shop below show the description of several committed messages;  
"Merge branch 'master' into working-on-links-in-toolbar"  
"finalise style, showpage card, colors"  
"admin functionality toolbar made, clear functions working"   
"fixed forgotpassword link"  
" subscribe.js bug fixed"  

![Github_featyre_branches](https://user-images.githubusercontent.com/47741682/61793097-a1bba200-ae61-11e9-83ce-7c2b5f03b9b9.png)


## Code review - Demonstrate that you have had your code reviewed by other students and that you have provided a code review for others

See figures below showing a request for a code review and the approval.

<img width="780" alt="Github_rob_to_anna" src="https://user-images.githubusercontent.com/47741682/61793364-5229a600-ae62-11e9-889e-2e3e018f904f.png">

![Github_anna_to_rob2](https://user-images.githubusercontent.com/47741682/61793497-9fa61300-ae62-11e9-8eb5-a34c5d70221e.png)

## Show evidence of client communication, e.g. meeting minutes, emails, or other communication tools
see below



## Project plan & timeline

  - Week 1 
    - Initial client meeting and approval
    - Set up project management channels
    - Set up Github
    - Low-fidelity wireframes
    - Deploy basic front and back-end
    - Design schema
    - Setup models
    - Get TA sign-off
    - Start Readme

  - Week 2
    - Basic CRUD working
    - Setup front and back-end routes
    - Setup controllers
    - High-fidelity wireframes for approval
    - Connect front and back-end
    - Mail chimp integration
    - React initial structure setup
    - Forgot password functionality
    - Image upload functionality
    - Responsive layouts
    - Test deployment

  - Week 3
    - Protected routes
    - Testing front and back-end
    - Finalise css and responsive layouts
    - UI functionality
    - Collect data for deployment
    - Search function
    - Validation / Authentication
    - Deploy
    - Readme
    - Prepare presentation
    - Prepare handover documents
    - Create client questionnaire
    - Post project review

## Client communications

Email correspondence: 

<img width="600" alt="Email correspondence" src="https://raw.githubusercontent.com/annarosz/temp/master/bookmarks_emails.jpg"> 

Trello boards: 

<img width="800" alt="Initial Trello setup" src="https://raw.githubusercontent.com/annarosz/temp/master/bookmarks_trello_1.png"> 

<img width="800" alt="Trello second" src="https://raw.githubusercontent.com/annarosz/temp/master/bookmarks_trello_2.png"> 

<img width="800" alt="Trello third" src="https://raw.githubusercontent.com/annarosz/temp/master/bookmarks_trello_3.png"> 

## Final Steps

  - Undertake thorough testing with 90% coverage:
    - User testing *Development*  
    - Backend. We tested for connection using postman with console log and res.send. Some examples are in the figures below including;
      -  testing routes are hit and a message returned  
      -  testing for a user that exists  
      -  login creates a token  
      -  req.body is pushed to backend
      -  <img width="922" alt="Dev_testV2" src="https://user-images.githubusercontent.com/47741682/61842167-8e005200-aeda-11e9-9929-a5f9e14e3016.png">  

    - Frontend. We tested console log and debugger. Some examples are in the figures below;

<img width="1308" alt="dev_front_debugger" src="https://user-images.githubusercontent.com/47741682/61843157-116f7280-aede-11e9-9d03-7d2af5c34bc9.png">


<img width="683" alt="Dev_testing_front_clg" src="https://user-images.githubusercontent.com/47741682/61843286-74610980-aede-11e9-905e-8ea61012b57c.png">
  
  - User testing *Production*   
  - We manually tested various options. Two of the many tests include;
    - incorrect password  
    - clicking on edit displays information in form, saves the change and returns updated information


<img width="855" alt="prod_test1" src="https://user-images.githubusercontent.com/47741682/61843812-7c21ad80-aee0-11e9-8595-8b7532068133.png">

![image](https://user-images.githubusercontent.com/47741682/61844449-c99f1a00-aee2-11e9-97cf-9e9851848b1c.png)



## Unit testing for front and back-end  
*Front-end*  
Enzyme and sinon was used for front-end testing.  
Tests included components rendering, fields displayed correctly, functions working. 



  - As a team, conduct post project review

## Deliverables

  - Create a handover document with important information including:
    - Login information and default passwords
    - Instructions for creating new Admin Login information
    - Instructions for using Admin side of the App
    - Instructions for images upload, min and max sizes for images
    - AWS account information
    - Maintenance and support plans

  - Create a questionnaire for the client to ascertain the satisfaction with your products and services.

  - In-person follow-up:
    - Anna will follow up with a face-to-face to share final project, instructions and handover documents.
___

# Short Answer questions 
  
## a. What are the most important aspects of quality software?  

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
___

## b. What libraries are being used in the app and why?    

Front-end Client  
- axios. version: 0.19.0 => Promise based HTTP client for the browser and node.js
- dotenv. version: 8.0.0 => Loads environment variables from a .env file into process.env
- history. version: 4.9.0 => manages session history and re-directs
- react. version: 16.8.6 => defines React components
- react-dom. version: 16.8.6 => Serves as the entry point to the DOM and server renderers for React
- react-router-dom. version: 5.0.1 => To load components in different routes
- react-scripts:. version: 0.1 => To configure scripts for create-react-app.  
devDependencies
  - case-sensitive-paths-webpack-plugin. version 2.2.0 => enforces the entire path of all required modules match the exact case of the actual path on disk
  - enzyme. version 3.10.0 => JavaScript Testing utility for React 
  - enzyme-adapter-react-16. version 1.14.0 => JavaScript Testing utility for React 
  - enzyme-to-json. version 3.3.5 => Convert Enzyme wrappers to a format compatible with Jest snapshot testing
  - react-test-renderer. version 16.8.6 => Grabs a snapshot of the "DOM tree"
  - sinon. version 7.3.2 => Test framework using spies, stubs and mocks

Back-end Client  
- aws-sdk. version: 2.494.0 =>  AWS S3 File Upload
- bcrypt. version: 3.0.6 => Hash passwords
- cors. version: 2.8.5 => Provides a Connect/Express middleware that can be used to enable CORS with various options.
- dotenv. version: 8.0.0 => Loads environment variables from a .env file into process.env
- express. version: 4.17.1 => To configure and develop the app API.
- joi. version: 14.3.1 =>
- jsonwebtoken. version: 8.5.1 => A method for representing claims securely between two parties.
- mongoose. version: 5.6.4 => A MongoDB object modeling tool designed to work in an asynchronous environment.
- multer. version: 1.4.2 => Adds a body object and a file or files object to the request object.
- nodemailer. version: 6.3.0 => Enables e-mail sending
- nodemon. version: 1.19.1 => Automatically restarts the node application when file changes in the directory are detected.
- request. version: 2.88.0 => Makes http calls.  
devDependencies
  - jest. version: 24.8.0 => JavaScript testing solution
  - now. version: 15.7.0 => To deploy the server in now.sh
  - supertest. version: 4.0.2 => High-level abstraction for testing HTTP
  - dotenv. version: 8.0.0 => Loads environment variables from a .env file into process.env

___

## c. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?  

In order to develop a website for a small business, a team would require the following knowledge and skills;
- project management skills
- communication and negotiation skills
- time management skills
- people management skills
- software development knowledge (web development, deployment)
- problem solving skills
- marketing, sales and customer knowledge of the product
___

## d. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

During the project knowledge and skills required can be separated into (i) project management and (ii) technical knowledge.  
First and foremost project management skills and knowledge were required to complete the projects. These included;
- communication and negotiation skills: being able to prioritize and distribute workload, not only with fellow students but with the client and educators.
- time management skills. The use of Trello helped with this aspect.
- project management knowledge and skills. 
- problem solving and perseverance.

Second and just as important are the technical skills needed to complete the project. Including knowledge of and experience with;
- the MERN Stack 
  - Mongo Database/Mongoose
  - Express API/Server
  - React.js
  - Node.js
- Vanilla Javascript
- GitHub
- HTML5, CSS
- Figma
- Deployment: Netlify/Now
- Testing
- VS Code
- Slack
- npn and npm libraries

___

## e. Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

Overall, our team had an even distribution of skills and knowledge needed for completion of the project. Anna was strong with project management, UI and UX. Rob was able to help with all aspects of the project but focused on React and Express coding. Gary had a good handle on the express coding but also helped with react coding.  
Like all projects, we faced many challenges. Anna worked her way through nested props in react; Rob had difficulty with sorting arrays with based on nested data, while Gary spent some time on the authorization. Overall, the knowledge and skills of our team was enough to achieve MVP. In addition, the support of mentors(educators) helped us achieve our goals.   



___

References:  
https://dzone.com/articles/10-groups-software-quality  
https://asq.org/quality-resources/software-quality  
https://en.wikipedia.org/wiki/ISO/IEC_9126#cite_note-1  
https://medium.com/@nvashanin/quality-attributes-in-software-architecture-3844ea482732

