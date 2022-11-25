using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuthApi
{
  public class CourseViewModel
  {
    public int Id { get; set; }
    public string CourseCode { get; set; }
    public double Score { get; set; }
    public int Unit { get; set; }
  }
}
