using Newtonsoft.Json;
using System.Threading.Tasks;

namespace Tela_de_registro.Services.IServices
{
    public async Task<object> InfoResponseAPI(string email, string username, string result)
    {
        InfoResponse obj = new InfoResponse()
        {
            Email = email,
            Username = username,
            Result = result
        };
    }

        
}