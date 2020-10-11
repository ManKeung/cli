/*
 * @Description: home controller
 * @Author: Mankeung
 * @Date: 2020-09-22 16:41:16
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-22 16:43:24
 */
import HomeService from '../service/home-service';

class HomeController {
  _service: HomeService = new HomeService();

  hello = async (ctx) => {
    ctx.body = await this._service.hello();
  }
}

export default new HomeController();