# 13th's Letters

This project was authored by Christina Zhang in Fall 2021 for the Code Quantum Hackathon.

- - - -
## Inspiration
It's spooky season! The supernatural is par for the course. This project incorporates my fascination with computational creativity as well as how art and language is used and arranged, especially in a digital landscape. Moreover, as someone who herself/themself finds incongruence with conventional binary norms, I often find that interacting on most popular social platforms to be quite stressful. With a hackathon geared toward people of marginalized genders, I wanted to work on a platform that places emphasis on creative productions and visuals, not so much on stratified conventions and groups. I want the public to easily access and create art, one in a form that is inclusive, intriguing, and insightful.

- - - -
## What it does


- - - -
## Technical Notes
Meteor is full-stack framework for building JavaScript applications (docs: https://docs.meteor.com/#/full/); it runs on both the client and the server (inside a Node.js container). The Collection for the MongoDB database is appropriately placed outside the `client` and `server` folder, or common code that runs in both environments; hence, it is able to run on both. The client can access MongoDB through minimongo. 

Other technologies used include React, Formik, ChakraUI, Google Cloud (for deploying MongoDB database on Cloud Cluster), and Galaxy.

- - - -
## Contact
christinazhang2013@gmail.com