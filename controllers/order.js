const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


const api = new WooCommerceRestApi({
  url: "https://api.apicef.space",
  consumerKey: "ck_405f553cb681aa2ace9393828987e582dece25dd",
  consumerSecret: "cs_c06fe4c3d90d5cbe6a3f84b8e53c78cb8c1afe81",
    version: "wc/v3"
  });

const createOrder = async (req, res) => {
    console.log(req.body);
await api.post("orders", req.body)
    .then((response) => {
      console.log("Response Data:", response.data);
      res.json( response.data );
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

  }; 

  const getOrders = async(req, res) => {
    console.log(req.body);
    await api.get("orders")
    .then((response) => {
      console.log("Response Data:", response.data);
      res.json( response.data );
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });
  }


module.exports = {
    createOrder, getOrders
};
