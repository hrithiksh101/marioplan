const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloworld = functions.https.onRequest((request, response) => {
  response.send(' hello ninjas! ');
});

const createNotification = (notification) => {
  return admin.firestore
    .collection('notifications')
    .add(notification)
    .then((doc) => console.log('notification added', doc));
};

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate((doc) => {
    const project = doc.date();
    const notification = {
      content: 'Added a new project',
      user: '${project.authorFirstName} ${project.authorLastName}',
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notifications);
  });

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();

      const notification = {
        content: 'Joined the party ',
        user: ` ${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notifications);
    });
});
