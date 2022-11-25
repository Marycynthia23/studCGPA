using AngularAuthApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuthApi.Context
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
    {

    }
    public DbSet<User> Users { get; set; }
    public DbSet<Student_Course> Student_Courses { get; set; }
    public DbSet<CourseCode> CourseCode { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>().ToTable("users");
      modelBuilder.Entity<Student_Course>().ToTable("Student Courses");
    }

  }
}
