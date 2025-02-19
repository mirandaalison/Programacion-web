using CapaDatos;
using CapaEntid;
using CapaEntidad;

namespace CapaNegocio
{
    public class SucursalBL
    {
        public List<SucursalCLS> ListarSucursales()
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.ListarSucursales();
        }

        public List<SucursalCLS> FiltrarSucursales(SucursalCLS objSucursal)
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.FiltrarSucursales(objSucursal);
        }
    }
}