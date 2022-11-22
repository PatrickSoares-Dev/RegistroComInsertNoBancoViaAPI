using Newtonsoft.Json;
using RestSharp;
using System.Threading.Tasks;
using Tela_de_registro.Models;
using Tela_de_registro.Services.IServices;

namespace Tela_de_registro.Services
{
    public class InfoEmailOrUser : IInfoServices
    {
        public async Task<object> CheckEmailOrUser(string email, string username)
        {

            RestClient client = new RestClient("https://cpaasapi.telecall.com.br")
            {

            };

            InfoModel obj = new InfoModel()
            {
                Email = email,
                Username = username,
                
            };

            //Tive que tirar a url, pois conectava a um banco privado

            RestRequest request = new RestRequest("/account/getUser", Method.Get);
            request.AddParameter("email", $"{obj.Email}");
            request.AddParameter("username", $"{obj.Username}");
            var response = await client.ExecuteAsync(request);

            return response;
        }

        public async Task<object> CreateAccount(string email, string password, string currency, string accountName)
        {
            //Tive que tirar a url, pois conectava a um banco privado
            RestClient client = new RestClient("https://teste.com.br")
            {
                
            };

            CreateModel obj = new CreateModel()
            {
                email = email,
                password = password,
                currency = currency,
                accountName = accountName
            };

            string requestBody = JsonConvert.SerializeObject(obj);

            RestRequest request = new RestRequest("/account/create", Method.Post).AddStringBody(requestBody, "application/json");
            var response = await client.ExecuteAsync(request);

            return response;
        }

    }
}
