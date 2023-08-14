import axios from "axios";

const apiKey = "cfd822868f3c257a0d180413d03f97e2";
const apiURL = "https://api.novaposhta.ua/v2.0/json/";

export const getNovaPoshtaOffices = async (city = "") => {
  try {
    const { data } = await axios.post(apiURL, {
      apiKey,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: `${city}`,
        Language: "ua",
      },
    });

    if (data && data.success && data.data) {
      return data.data;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const getTrackingInfo = async (trackingNumber) => {
  try {
    const response = await axios.post(
      apiURL,
      {
        apiKey,
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: trackingNumber,
              Phone: "",
            },
          ],
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    return null;
  }
};

export const getNovaPoshtaCityList = async () => {
  try {
    const { data } = await axios.post(apiURL, {
      apiKey,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        Language: "ua",
      },
    });

    if (data && data.success && data.data) {
      return data.data;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
