using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace app_api.Migrations
{
    /// <inheritdoc />
    public partial class addRoomsAndImages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "AccommodationImages",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "AccommodationImages");
        }
    }
}
