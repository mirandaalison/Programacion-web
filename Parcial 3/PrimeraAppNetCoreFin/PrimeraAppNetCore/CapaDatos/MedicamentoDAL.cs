using System.Collections.Specialized;
using System.Data.SqlClient;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class MedicamentoDAL : CadenaDAL
    {

        public int GuardarTipoMedicamento(MedicamentoCLS oMedicamentoCLS)
        {
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("insert into TipoMedicamento(NOMBRE,DESCRIPCION, BHABILITADO) values(@nombre, @descripcion, 1)", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Parameters.AddWithValue("@nombre", oMedicamentoCLS.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", oMedicamentoCLS.descripcion);

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
        public List<MedicamentoCLS> FiltrarMedicamentos(string descripcionFiltrar)
        {
            descripcionFiltrar = descripcionFiltrar != null ? descripcionFiltrar : "";

            List<MedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {

                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombretipomedicamento", descripcionFiltrar);
                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            MedicamentoCLS oMedicamentoCLS;
                            lista = new List<MedicamentoCLS>();

                            while (dr.Read())
                            {
                                oMedicamentoCLS = new MedicamentoCLS();
                                oMedicamentoCLS.id = dr.IsDBNull(0) ? 1 : dr.GetInt32(0);
                                oMedicamentoCLS.nombre = dr.IsDBNull(1) ? string.Empty : dr.GetString(1);
                                oMedicamentoCLS.descripcion = dr.IsDBNull(2) ? string.Empty : dr.GetString(2);
                                lista.Add(oMedicamentoCLS);
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

        public List<MedicamentoCLS> ListarMedicamentos()
        {
            List<MedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            MedicamentoCLS oMedicamentoCLS;
                            lista = new List<MedicamentoCLS>();

                            while (dr.Read())
                            {
                                oMedicamentoCLS = new MedicamentoCLS();
                                oMedicamentoCLS.id = dr.IsDBNull(0) ? 1 : dr.GetInt32(0);
                                oMedicamentoCLS.nombre = dr.IsDBNull(1) ? string.Empty : dr.GetString(1);
                                oMedicamentoCLS.descripcion = dr.IsDBNull(2) ? string.Empty : dr.GetString(2);
                                lista.Add(oMedicamentoCLS);
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
