using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {

        private readonly ContactsDbContext _db;

        public ContactsController(ContactsDbContext context)
        {
            _db = context;
        }

        // GET: api/<ContactsController>
        [HttpGet]
        public IQueryable<Contact> Get()
        {
            return _db.Contacts;
        }

        
        


        // POST api/<ContactsController>
        [HttpPost]
        public void Post([FromBody] Contact value) //kayıt//
        {
            try
            {
                if (value.Id != 0)
                    _db.Contacts.Update(value);
                else
                _db.Contacts.Add(value);
                _db.SaveChanges();
            }
            catch (Exception ex)
            { 

            }

        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContactsController>/5
        [HttpGet("{id}")]
        public void Delete(int id)
        {
            var con = _db.Contacts.Where(t => t.Id == id).FirstOrDefault();
            if (con!= null)
            {
                _db.Contacts.Remove(con);
                _db.SaveChanges();
            }
        }
    }
}
