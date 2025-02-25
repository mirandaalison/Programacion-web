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

        //public List<SucursalCLS> FiltrarSucursales(SucursalCLS obj)
        //{
        //    SucursalBL sucursalBL = new SucursalBL();
        //    return sucursalBL.FiltrarSucursales(obj);
        //}

        public int GuardarSucursal(SucursalCLS obj)
        {
            SucursalBL objBL = new SucursalBL();
            return objBL.GuardarSucursal(obj);
        }

        public SucursalCLS recuperarSucursal(int idSucursal)
        {
            SucursalBL objBL = new SucursalBL();
            return objBL.recuperarSucursal(idSucursal);
        }


     
    }
}
