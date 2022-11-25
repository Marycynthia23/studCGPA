using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuthApi
{
  public class StudentCourseViewModel
  {
    public int Id { get; set; }
    public int UserId { get; set; }

    public List<CourseViewModel> Courses { get; set; }

  }
}
