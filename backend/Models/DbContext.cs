using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<BookingItem> BookingItems { get; set; }
    }
}