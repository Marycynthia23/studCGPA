using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuthApi.Models
{
  public class Student_Course
  {
    [Key]
    public int Id { get; set; }
    public User User { get; set; }
    public string CourseCode { get; set; }
    public double Score { get; set; }
    public int Unit { get; set; }
  }
}
