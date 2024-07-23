using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace app_api.Migrations
{
    /// <inheritdoc />
    public partial class addUserToLoginCode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LoginCodes_Users_UserId",
                table: "LoginCodes");

            migrationBuilder.AlterColumn<long>(
                name: "UserId",
                table: "LoginCodes",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_LoginCodes_Users_UserId",
                table: "LoginCodes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LoginCodes_Users_UserId",
                table: "LoginCodes");

            migrationBuilder.AlterColumn<long>(
                name: "UserId",
                table: "LoginCodes",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddForeignKey(
                name: "FK_LoginCodes_Users_UserId",
                table: "LoginCodes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
