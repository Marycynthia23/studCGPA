using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularAuthApi.Migrations
{
    public partial class ChangedtheunittoUnit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "unit",
                table: "CourseCode",
                newName: "Unit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Unit",
                table: "CourseCode",
                newName: "unit");
        }
    }
}
