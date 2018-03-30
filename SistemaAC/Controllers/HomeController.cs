using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaAC.Models;

namespace SistemaAC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Authorize(Roles = "Administrador")]
        public IActionResult About()
        {
            ViewData["Message"] = "Curso de Sistemas web ASP.Net Core, MVC, Entity Framework y Ajax";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Información del desarrollador";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
