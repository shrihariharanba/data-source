
const express = require('express');
const foodMenueRoutes = require('./router/foodMenue');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
const swaggerjsonFilePath = require("./swagger/swagger_output.json");
const constants = require("./util/constants")


const app = express();
const port = 3003;

const authenticate = (req, res, next) => {
  let key = req.header('apiKey');
  if (key === constants.api_key) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.use(cors())
app.use("/data-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerjsonFilePath));
app.use('/data', authenticate, foodMenueRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});