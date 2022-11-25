using AngularAuthApi.Context;
using AngularAuthApi.Models;
using AngularAuthApi.UserViewModel;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuthApi.Controllers
{
  [EnableCors("CorsPolicy")]
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly AppDbContext _authContext;
    public UserController(AppDbContext appDbContext)
    {
      _authContext = appDbContext;
    }
    [HttpPost("authenticate")]
    public async Task<IActionResult> Authenticate([FromBody] UserViewModel2 userObj){
      try
      {
        if (userObj == null)
          return BadRequest();
        //if the user already exist or is in the database
        var user = await _authContext.Users.FirstOrDefaultAsync(x => x.Email == userObj.Email && x.Password == userObj.Password);
        if (user == null)
          return NotFound(new { Message = "User not Found!" });

        return Ok(new
        {
          Message = "Login Success!",
          User = user
        });
      }
      catch (Exception)
      {

        throw;
      }
     
      
    }

    [HttpPost("register")]
    public async Task<IActionResult> RegisterUser([FromBody] User userObj)
    {
      if (userObj == null)
        return BadRequest();

      await _authContext.Users.AddAsync(userObj);
      await _authContext.SaveChangesAsync();
      return Ok(new
      {
        Message = "User Registered"
      });
    }

    [HttpGet("getStudentById")]
    public async Task<IActionResult>getStudentById(int Id)
    {
      var userObj = await _authContext.Users.FirstOrDefaultAsync(x => x.Id == Id );
      if(userObj == null)
      {
        return NotFound(
          new { Message = "User does not exist" }
          );
      }
      else
      {
        return Ok(userObj);
      }

    }

    [HttpPost("savecourse")]

    public async Task<IActionResult> SaveCourse([FromBody] StudentCourseViewModel model)
    {
      if (model == null)
        return BadRequest();
      var user = await _authContext.Users.FindAsync(model.UserId);
      foreach (var course in model.Courses)
      {
        var student_courses = new Student_Course
        {
          User = user,
          CourseCode = course.CourseCode,
          Score = course.Score,
          Unit = course.Unit
        };
        await _authContext.Student_Courses.AddAsync(student_courses);
      }

      await _authContext.SaveChangesAsync();
      return Ok(new
      {
        Message = "User Registered"
      });
    }


    [HttpGet("getcourse")]
    public async Task<IActionResult> GetCourse(int id)
    {
      if (id <= 0)
        return BadRequest();
      var user = await _authContext.Users.FindAsync(id);
      var courses = await _authContext.Student_Courses.Where(x => x.User.Id == id).Select(x => new CourseViewModel {
        CourseCode = x.CourseCode,
        Score = x.Score,
        Unit= x.Unit,
        Id = x.Id
      }
      ).ToListAsync();

      //foreach (var course in model.Courses)
      //{
      //  var student_courses = new Student_Course
      //  {
      //    User = user,
      //    CourseCode = course.CourseCode,
      //    Score = course.Score,
      //    Unit = course.Unit
      //  };
      //  await _authContext.Student_Courses.AddAsync(student_courses);
      //}

      //await _authContext.SaveChangesAsync();
      return Ok(new
      {
        Message = "User Registered",
        Courses = courses
      });
    }

    [HttpGet("getcoursecode")]

    public async Task<IActionResult>GetAllCourseCode()
    {
      var coursecode = await _authContext.CourseCode.Select(x => new CourseCode
      {
        Id = x.Id,
        courseCode = x.courseCode,
        Unit = x.Unit
      }).ToListAsync();

      return Ok(coursecode);
    }

    [HttpPost("addcourse")]

    public async Task<IActionResult>AddCourse([FromBody] CourseCode code)
    {
      var course = new CourseCode
      {
        courseCode = code.courseCode,
        Unit = code.Unit
      };

      await _authContext.CourseCode.AddAsync(course);
      await _authContext.SaveChangesAsync();

      return Ok("Course code added successfully");
    }


  }
}
