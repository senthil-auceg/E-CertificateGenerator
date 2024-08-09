exports.js (from the services folder):

It exports two functions: exportToPNG and exportToJPG.
exportToPNG: Uses react-component-export-image to export a component as a PNG image. It takes a reference to a component (printCertificateRef) and an optional name parameter for the file name.
exportToJPG: Similar to exportToPNG but exports as a JPEG image.
getProjectFromCloud.js:

Exports a function getProjectFromCloud that fetches project data from a cloud server.
It sends a POST request to the server (https://certificate-generator-backend-node.vercel.app/get_projects) with the user token and sets the project data using the provided callback (setProjectData).
saveprojectstocloud.js:

Exports a function saveProjectToCloud that is responsible for saving or updating projects on the cloud server.

It uses Axios to send a POST request to the server (https://certificate-generator-backend-node.vercel.app/uploadImage) to upload an image to Cloudinary.

Depending on whether the image is a blob (local), it either uploads the image and then adds or updates the project accordingly.

The convertBase64 function converts a file to base64.

If the project is being updated, it sends a POST request to update the project (https://certificate-generator-backend-node.vercel.app/update_project).

If it's a new project, it sends a POST request to create a new project (https://certificate-generator-backend-node.vercel.app/add_project).

The project data includes user token, date, project name, image URL, and text layers.

It uses promises and async/await to handle asynchronous operations and updates the UI using the provided callback functions.

This code is handling the integration of a React application with a backend server, including project creation, updating, and retrieval from the server. If you have specific questions or need clarification on any part of the code, feel free to ask!




