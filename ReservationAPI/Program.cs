using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using ReservationAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    var contractResolver = options.SerializerSettings.ContractResolver;
    if (contractResolver != null)
    {
        ((DefaultContractResolver)contractResolver).NamingStrategy = null;
    }
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ReservationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "myOrigins", options =>
    {
        options.WithOrigins("http:localhost:4200").AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("myOrigins");
app.UseAuthorization();

app.MapControllers();

app.Run();
