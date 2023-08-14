import axios from 'axios';

const API_KEY = 'cfd822868f3c257a0d180413d03f97e2';

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
