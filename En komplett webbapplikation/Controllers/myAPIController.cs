using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace En_komplett_webbapplikation.Controllers
{
     [ApiController]
    
    [Route("[controller]")]
    public class myAPIController : ControllerBase
    {
        [HttpGet("myAPI/getMyApi")]
        public List<string> GetAll()
        {
            return new List<string> { "Moosa", "APi", "Angular" };
        }
    }
}

