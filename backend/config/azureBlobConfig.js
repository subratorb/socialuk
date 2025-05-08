const { BlobServiceClient } = require('@azure/storage-blob');

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = 'media';

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(containerName);

module.exports = containerClient;const { BlobServiceClient } = require('@azure/storage-blob');

// The connection string for Azure Storage (will be retrieved from environment variables)
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

// The name of the container you are working with (your container name)
const containerName = 'socialuk'; // Your container name

// Create the BlobServiceClient instance using the connection string
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

// Get the container client for the 'socialukgroupa9e0' container
const containerClient = blobServiceClient.getContainerClient(containerName);

// Export the containerClient so it can be used in other files
module.exports = containerClient;
