using System.Threading.Tasks;

namespace Tela_de_registro.Services.IServices
{
    public interface IInfoServices
    {
        Task<object> CheckEmailOrUser(string Email, string Username);
        Task<object> CreateAccount(string email, string password, string currency, string accountName);
    }
}