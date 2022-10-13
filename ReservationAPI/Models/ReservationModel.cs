using System.ComponentModel.DataAnnotations;

namespace ReservationAPI.Models
{
    public class ReservationModel
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; } = String.Empty;

        [Required]
        public string Email { get; set; } = String.Empty;

        [Required]
        public string Phone { get; set; } = String.Empty;
        [DataType(DataType.Date)]
        [Required]
        public DateTime ReservationDate { get; set; }
        [Required]
        public string SessionType { get; set; } = String.Empty;
        [Required]
        public string ReservationLocation { get; set; } = String.Empty;
        public string AdditionalInfo { get; set; } = String.Empty; 
    }
}
