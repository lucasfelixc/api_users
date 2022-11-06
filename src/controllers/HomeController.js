class HomeController {
  index(erq, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
