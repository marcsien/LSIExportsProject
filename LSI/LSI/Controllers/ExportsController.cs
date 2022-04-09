using LSI.DB;
using LSI.DBModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LSI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExportsController : ControllerBase
    {
        [HttpGet]
        [Route("/exports/all")]
        public IEnumerable<ExportDTO> GetAllExports()
        {
            List<ExportDTO> exports = null;
            using (var db = new LSIDBContext())
            {
                exports = db.Exports.Select(x => new ExportDTO() {
                   Id = x.Id,
                   Name = x.Name,
                   Date = x.Date.ToString(),
                   Time = x.Time.ToString(),
                   UserName = x.UserName,
                   LocalName = x.LocalName               
               }).ToList();
            }
            return exports;
        }

        [HttpGet]
        [Route("/exports/selectableusers")]
        public IEnumerable<string> GetSelectableUsers()
        {
            List<string> users;
            using (var db = new LSIDBContext())
            {
                users = db.Exports.Select(e=>e.UserName).ToList();
            }
            return users;
        }

        [HttpGet]
        [Route("/exports/")]
        public IEnumerable<ExportDTO> GetExports([FromQuery] string username, [FromQuery] DateTime datefrom, [FromQuery] DateTime dateto)
        {
            Console.WriteLine(DateTime.Now);
            List<ExportDTO> exports = null;
            using (var db = new LSIDBContext())
            {
                var dbexports = db.Exports.Where(x => x.Date > datefrom).Where(x => x.Date < dateto).Where(x => x.UserName == username);

                exports = dbexports.Select(x => new ExportDTO()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Date = x.Date.ToString(),
                    Time = x.Time.ToString(),
                    UserName = x.UserName,
                    LocalName = x.LocalName
                }).ToList();
            }
            return exports;
        }
    }
}
