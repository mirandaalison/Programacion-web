using CapaEntid;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;

namespace PrimeraAppNetCore.Controllers
{
    public class SucursalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<SucursalCLS> ListarSucursales()
        {
            SucursalBL sucursalBL = new SucursalBL();
            return sucursalBL.ListarSucursales();
        }

        public List<SucursalCLS> FiltrarSucursales(SucursalCLS objSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.FiltrarSucursales(objSucursal);
        }
    }
}