﻿using System.Data.SqlClient;
using CapaEntid;
using CapaEntidad;

namespace CapaDatos
{
    public class SucursalDAL : CadenaDAL
    {
        public List<SucursalCLS> ListarSucursales()
        {
            List<SucursalCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                cn.Open();
                try
                {
                    using (SqlCommand cmd = new SqlCommand("uspListarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            SucursalCLS oSucursalCLS;
                            lista = new List<SucursalCLS>();
                            int idSucursalOrdinal = dr.GetOrdinal("IIDSUCURSAL");
                            int nombreOrdinal = dr.GetOrdinal("NOMBRE");
                            int direccionOrdinal = dr.GetOrdinal("DIRECCION");
                            while (dr.Read())
                            {
                                oSucursalCLS = new SucursalCLS();
                                oSucursalCLS.idSucursal = dr.GetInt32(idSucursalOrdinal);
                                oSucursalCLS.nombre = dr.GetString(nombreOrdinal);
                                oSucursalCLS.direccion = dr.GetString(direccionOrdinal);
                                lista.Add(oSucursalCLS);
                            }
                        }
                    }
                    cn.Close();
                    cn.Dispose();
                }
                catch (Exception ex)
                {
                    lista = null;
                }
            }
            return lista;
        }

        public List<SucursalCLS> FiltrarSucursales(SucursalCLS obj)
        {
            List<SucursalCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                cn.Open();
                try
                {
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombresucursal", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            SucursalCLS oSucursalCLS;
                            lista = new List<SucursalCLS>();
                            int idSucursalOrdinal = dr.GetOrdinal("IIDSUCURSAL");
                            int nombreOrdinal = dr.GetOrdinal("NOMBRE");
                            int direccionOrdinal = dr.GetOrdinal("DIRECCION");
                            while (dr.Read())
                            {
                                oSucursalCLS = new SucursalCLS();
                                oSucursalCLS.idSucursal = dr.GetInt32(idSucursalOrdinal);
                                oSucursalCLS.nombre = dr.GetString(nombreOrdinal);
                                oSucursalCLS.direccion = dr.GetString(direccionOrdinal);
                                lista.Add(oSucursalCLS);
                            }
                        }
                    }
                    cn.Close();
                    cn.Dispose();
                }
                catch (Exception ex)
                {
                    lista = null;
                }
            }
            return lista;
        }
    }
}