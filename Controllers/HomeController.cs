using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Refit;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Tela_de_registro.Models;
using Tela_de_registro.Services.IServices;

namespace Tela_de_registro.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private IInfoServices _infoServices;
        private IInfoServices _createAccount;



        public HomeController(ILogger<HomeController> logger, IInfoServices infoServices, IInfoServices createAccount)
        {
            _logger = logger;
            _infoServices = infoServices;
            _createAccount = createAccount;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        [HttpPost]
        [Route("/infoemailoruser")]
        public async Task<JsonResult> CheckEmailOrUser(string Email, string Username)
        {
            object response = await _infoServices.CheckEmailOrUser(Email, Username);

            return Json(response);

        }

        [HttpPost]
        [Route("/createaccount")]
        public async Task<JsonResult> CreateAccount(string email, string password, string currency, string accountName)
        {
            object response = await _createAccount.CreateAccount(email, password, currency, accountName);

            return Json(response);

        }


    }
}
