using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {


        private readonly ContactsDbContext _db;

        public CitiesController(ContactsDbContext context)
        {
            _db = context;
        }

        // GET: api/<CitiesController>
        [HttpGet]
        public IQueryable<City> Get()
        {
            return _db.Cities;
        }

        // GET api/<CitiesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] City value)
        {
            try
            {
                if (value.Id != 0)
                    _db.Cities.Update(value);
                else
                    _db.Cities.Add(value);
                _db.SaveChanges();
            }
            catch (Exception ex)
            {

            }

        }

        // PUT api/<CitiesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CitiesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
