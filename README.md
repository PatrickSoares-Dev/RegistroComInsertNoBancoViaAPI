# Tela de registro com inserção no banco de dados usando um Endpoint de API.

> Uma tela de registro simples que realiza validações dos campos por meio de JavaScript. Após o acionamento do botão, é feita uma chamada à API para verificar se os campos "Usuário" e "Email" já foram cadastrados. Caso positivo, retorna um erro. Caso contrário, os dados de cadastro são inseridos no banco de dados por meio da API usando o pacote Refit.

![Exemplo de imagem](./imagem.png)

## Aplicativo de Teste Grátis - Documentação

Este repositório contém um aplicativo ASP.NET Core que permite que os usuários se cadastrem para um teste grátis. O código fornecido é uma combinação de HTML, CSS, JavaScript e código C# para o backend. Nesta documentação, irei explicar cada parte do código em detalhes.

## Arquivo HTML

O arquivo HTML é responsável por definir a estrutura básica da página e os elementos do formulário de cadastro. Ele contém as seguintes seções:

- **Título da página**: É definido usando a tag `<title>` para especificar o título exibido na aba do navegador.
- **Estrutura básica do documento**: O código HTML começa com a tag `<html>`, seguida pela tag `<head>` e `<body>`, que envolvem o conteúdo da página.
- **Layout da página**: O layout é criado usando várias tags `<div>` aninhadas, que dividem a página em seções lógicas.
- **Formulário de cadastro**: Um formulário `<form>` é usado para coletar os dados do usuário. Ele contém campos de entrada para nome de usuário, e-mail, senha e confirmação de senha. Cada campo de entrada está associado a uma tag `<small>`, que exibe mensagens de validação para o respectivo campo.
- **Botão "TESTE GRÁTIS"**: Um botão "TESTE GRÁTIS" é exibido no final do formulário. Por padrão, ele está desabilitado.

## Arquivo CSS

O arquivo CSS é responsável por estilizar o código HTML e adicionar animações. Ele contém as seguintes seções:

- **Estilização do indicador de carregamento**: O seletor `.loader` define as propriedades do indicador de carregamento. Ele usa uma técnica de rotação para criar uma animação.
- **Animação do indicador de carregamento**: A animação é definida usando a regra `@keyframes loader`, que especifica a transformação e a cor do indicador em diferentes estágios.

## Arquivo JavaScript

O arquivo JavaScript adiciona interatividade ao aplicativo e manipula os elementos do formulário. Ele contém as seguintes seções:

- **Manipuladores de eventos**: Vários manipuladores de eventos são definidos para os campos de entrada do formulário. Esses manipuladores são acionados quando os campos são alterados ou quando o botão "TESTE GRÁTIS" é clicado.
- **Função de validação**: A função `validate()` é chamada quando o botão "TESTE GRÁTIS" é clicado. Ela verifica se todos os campos obrigatórios foram preenchidos e exibe mensagens de erro, se necessário.
- **Função de validação da senha**: A função `validatePassword()` é chamada quando o campo de confirmação de senha é alterado. Ela verifica se a senha e a confirmação de senha correspondem.
- **Função de verificação de força da senha**: A função `verificaForcaSenha()` é chamada quando o campo de senha é alterado. Ela verifica a força da senha com base em critérios como comprimento, presença de números, letras maiúsculas, letras minúsculas e caracteres especiais.
- **Função de validação do e-mail**: A função `validacaoEmail()` é chamada quando o campo de e-mail é alterado. Ela verifica se o formato do e-mail é válido.

## Arquivo ASP.NET Core (C#)

Os arquivos C# são classes que definem serviços e controladores para o aplicativo ASP.NET Core. O arquivo InfoEmailOrUser.cs define um serviço que realiza chamadas a uma API REST para verificar e criar contas de usuário com base no e-mail e nome de usuário fornecidos. O arquivo HomeController.cs define um controlador para a página inicial e contém a lógica para lidar com as solicitações HTTP, como verificar e criar contas de usuário. Os métodos CheckEmailOrUser() e CreateAccount() no controlador lidam com as solicitações POST enviadas para as rotas /infoemailoruser e /createaccount, respectivamente. O arquivo Startup.cs é usado para configurar o aplicativo ASP.NET Core.

Essa é uma visão geral do código fornecido. Cada parte desempenha um papel específico no aplicativo, como definir a estrutura HTML, estilizar a página, adicionar interatividade com JavaScript e lidar com solicitações HTTP em um aplicativo ASP.NET Core.
