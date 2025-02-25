using CapaEntidad;
using CapaDatos;

namespace CapaNegocio
{
    public class MedicamentoBL
    {
        public List<MedicamentoCLS> ListarMedicamentos()
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.ListarMedicamentos();
        }

        public List<MedicamentoCLS> FiltrarMedicamentos(string descripcionFiltrar)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.FiltrarMedicamentos(descripcionFiltrar);
        }

        public int GuardarTipoMedicamento(MedicamentoCLS obj)
        {
            MedicamentoDAL objDAL = new MedicamentoDAL();
            return objDAL.GuardarTipoMedicamento(obj);
        }
    }
}
