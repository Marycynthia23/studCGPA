using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuthApi.Models
{
  public class User
  {
    [Key]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Department { get; set; }

    public string Institution { get; set; }
    public int Level { get; set; }
    public int MarticNo { get; set; }
  }
}
