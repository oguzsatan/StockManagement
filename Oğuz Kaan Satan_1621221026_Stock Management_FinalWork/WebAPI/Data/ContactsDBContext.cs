using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class ContactsDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public DbSet<City> Cities { get; set; }

        public DbSet<Sale> Sales { get; set; }
        public ContactsDbContext(DbContextOptions<ContactsDbContext> options)
            : base(options)
        { }
    }
}
