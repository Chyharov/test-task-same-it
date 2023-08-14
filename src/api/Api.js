import axios from 'axios';

const API_KEY = 'dccd9bbf39a9263b0b43d1cf06e44a0e';

const API_URL = 'https://api.novaposhta.ua/v2.0/json/';

export const getTrackingInfo = async (trackingNumber) => {
    try {
    const response = await axios.post(
      API_URL,
      {
        apiKey: API_KEY,
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: trackingNumber,
              Phone: '',
            },
          ],
        },
      }
      );

    return response.data;
  } catch (error) {
    console.error('Error fetching tracking info:', error);
    return null;
  }
};
