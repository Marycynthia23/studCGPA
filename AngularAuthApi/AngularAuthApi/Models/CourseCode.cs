using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuthApi.Models
{
  public class CourseCode
  {
    [Key]
    public int Id { get; set; }
    public string courseCode { get; set; }
    public int Unit { get; set; }
  }

}
