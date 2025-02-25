using System.Data;
using System.Data.SqlClient;
using CapaEntid;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class SucursalDAL : CadenaDAL
    {

        public int GuardarSucursal(SucursalCLS osucursalCLS)
        {
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("insert into Sucursal(NOMBRE,DIRECCION, BHABILITADO) values(@nombre, @direccion, 1)", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Parameters.AddWithValue("@nombre", osucursalCLS.nombre);
                        cmd.Parameters.AddWithValue("@direccion", osucursalCLS.direccion);

                        rpta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                }
            }
            return rpta;
        }
        public SucursalCLS recuperarSucursales(int idSucursal)
        {
            SucursalCLS oSucursal = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                cn.Open();
                try
                {
                    using (SqlCommand cmd = new SqlCommand("SELECT IIDTIPOMEDICAMENTO as iidTipoMedicamento,NOMBRE AS nombre,DESCRIPCION as descripcion FROM TipoMedicamento WHERE IIDTIPOMEDICAMENTO = @idTipoMedicamento", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@idSucursal", idSucursal);

                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null && dr.Read())
                        {
                            oSucursal = new SucursalCLS
                            {
                                idSucursal = dr.GetInt32(dr.GetOrdinal("IIDSUCURSAL")),
                                nombre = dr.IsDBNull(dr.GetOrdinal("NOMBRE")) ? "" : dr.GetString(dr.GetOrdinal("NOMBRE")),
                                direccion = dr.IsDBNull(dr.GetOrdinal("DIRECCION")) ? "" : dr.GetString(dr.GetOrdinal("DIRECCION"))
                            };
                        }
                    }

                    cn.Close();
                    cn.Dispose();
                }
                catch (Exception ex)
                {
                    oSucursal = null;
                }
            }

            return oSucursal;
        }



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

                            int idSucursal = dr.GetOrdinal("IIDSUCURSAL");
                            int nombre = dr.GetOrdinal("NOMBRE");
                            int direccion = dr.GetOrdinal("DIRECCION");

                            while (dr.Read())
                            {
                                oSucursalCLS = new SucursalCLS();
                                oSucursalCLS.idSucursal = dr.GetInt32(idSucursal);
                                oSucursalCLS.nombre = dr.IsDBNull(nombre) ? "" : dr.GetString(nombre);
                                oSucursalCLS.direccion = dr.IsDBNull(direccion) ? "" : dr.GetString(direccion);
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
