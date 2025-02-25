using System;
using System.Collections.Generic;
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

        //public List<SucursalCLS> FiltrarSucursales(SucursalCLS obj)
        //{
        //    SucursalDAL sucursalDAL = new SucursalDAL();
        //    return sucursalDAL.FiltrarSucursales(obj);
        //}

        public int GuardarSucursal(SucursalCLS obj)
        {
            SucursalDAL objDAL = new SucursalDAL();
            return objDAL.GuardarSucursal(obj);
        }

        public SucursalCLS recuperarSucursal(int idSucursal)  
        {
            SucursalDAL objDAL = new SucursalDAL();
            return objDAL.recuperarSucursales(idSucursal);  
        }
    }
}
