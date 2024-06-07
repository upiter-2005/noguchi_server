const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: "https://api.apicef.space",
    consumerKey: "ck_405f553cb681aa2ace9393828987e582dece25dd",
    consumerSecret: "cs_c06fe4c3d90d5cbe6a3f84b8e53c78cb8c1afe81",
    version: "wc/v3"
  });

const getProducts = async (req, res) => {
  await api.get("products", {
    per_page: 100,
    orderby: 'menu_order',
    //lang: "en" // 20 products per page
  })
    .then((response) => {
      console.log("Response Data:", response.data);
      res.json( response.data );
    })
    .catch((error) => {
      res.json(error)
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

   
  }; 

const getFeatureProducts = async (req, res) => {
  await api.get("products", {
    per_page: 30,
    featured: true, // 20 products per page 
  })
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
const getProductById = async (req, res) => {
    const { id } = req.body;
await api.get("products/" + id, {
    per_page: 1, 
  })
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



module.exports = {
    getProducts,
    getProductById,
    getFeatureProducts
};
