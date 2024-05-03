using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace app_api.Domain
{
    [PrimaryKey(nameof(UserId), nameof(RoleId))]
    public class UserRole
    {
        [Column(Order = 1)]
        public int UserId { get; set; }

        [Column(Order = 2)]
        public int RoleId { get; set; }


        public User User { get; set; }
        public Role Role { get; set; }
    }
}
