/**
 * Contains the miscellaneous route handlers.
 * @author BWandile-cyber <https://github.com/Wandile-cyber>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
