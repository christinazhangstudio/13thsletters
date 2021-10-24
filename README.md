# 13th's Letters

This project was authored by Christina Zhang in Fall 2021 for the Code Quantum Hackathon.

- - - -
## Inspiration
It's spooky season! The supernatural is par for the course. This project incorporates my fascination with computational creativity as well as how art and language is used and arranged, especially in a digital landscape. With a hackathon geared toward people of marginalized genders, I wanted to work on a platform that places emphasis on creative productions. I want the public to easily share and create art, one in a form that is inclusive, intriguing, and insightful.

- - - -
## What it does
This web-based application allows users to create an account, sign in, and sign out. Users can initiate communication with "spirits" by sending any line of text. They can delete a text entry by clicking "Remove." Next is uploading image(s), where users have the convenient options of uploading from local files, a web address, the device camera, Google Drive, Facebook, etc. Note: users should be sure to click "Advanced" in the bottom left corner and add "13" as the image tag. 13th, like all other cats (*like all other cats from Earth), needs to be bugged a little to do something sometimes. Since 13th can travel through different dimensions or layers of the spirit realm, and since different kinds of spirits, with various levels of perceptions, strengths, and abilities, live in these planes, there are several ways the text and images users upload are altered. A random text is selected to be paired with the image(s) uploaded - for a different text, users may add some more messages. These altered creations are able to be viewed instantaneously. Moreover, users are able to save them to their device. There's also a light mode and dark mode for the UI!

- - - -
## Technical Notes
Meteor is full-stack framework for building JavaScript applications (docs: https://docs.meteor.com/#/full/); it runs on both the client and the server (inside a Node.js container). The Collection for the MongoDB database is appropriately placed outside the `client` and `server` folder, or common code that runs in both environments; hence, it is able to run on both. The client can access MongoDB through minimongo. 

Other technologies used include React, Formik, ChakraUI, Google Cloud (for deploying MongoDB database on Cloud Cluster), and Galaxy.

- - - -
## Contact
christinazhang2013@gmail.com
