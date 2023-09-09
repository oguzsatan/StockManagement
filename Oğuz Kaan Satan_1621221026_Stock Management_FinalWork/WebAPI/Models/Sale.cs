using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Sale
    {
        [Key]
        public int Id { get; set; }
        public string ContactId { get; set; }
        public int Amount { get; set; }
    }
}
