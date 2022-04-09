using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LSI.DBModels
{
    public class ExportDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string UserName { get; set; }
        public string LocalName { get; set; }
    }
}
