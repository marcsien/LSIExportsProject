using System;
using System.Collections.Generic;

#nullable disable

namespace LSI.DB
{
    public partial class Export
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? Date { get; set; }
        public TimeSpan? Time { get; set; }
        public string UserName { get; set; }
        public string LocalName { get; set; }
    }
}
