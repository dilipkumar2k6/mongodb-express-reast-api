const MongodbService = require('./MongodbService');


class Controller {

  static async userRegistrationHandler(req, res) {
    const payload = req.body;

    const mongodbService = new MongodbService();
    await  mongodbService.init();
    const user = await mongodbService.userRegistration(payload);

    // res.send('Got a POST request');
    res.json(user)
  }

  static async userAuthHandler(req, res) {
    const payload = req.body;

    const mongodbService = new MongodbService();
    await  mongodbService.init();

    // Get user details for given username

    const user = await mongodbService.findUser(payload.username);

    if (user.password === payload.password) {
      res.json(user)
    } else {
      res.json({status: 'Your username or password is incorrect.'})
    }


  }

}

module.exports = Controller;