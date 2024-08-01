##  Reagras para comsumir um Api externo com react.js

***passo 1***
#  1.criar um usestate - passa para ele um array vazio(já que o api que vai ser consumido é um array de objetos)
**importe o mesmo:  import { useEffect, useState } from "react";

***passo 2 ***
#  2- criar um useEfect para vigiar alteraçoes na renderizaçao do nosso componente.(lembrando que um useEffect recebe como primeiro parametro um arrow funtion, e como segundo parametro um array vázio).##

***passo 3***
# 3- criar funçao javascript puro que vai ser responsável por consumir o nosso api 
**3.1 - criar uma variavel que vai receber o fetch da api (ele é um promise ou seja promessa de sucesso ou erro e essa variavel vai receber diretamente o link de API ), depois crie fetch e passa por ele variavel*


**3.2 - criar uma variavel que vai receber o json da api(1º .then -> ele é um caso de sucesso , que vai receber um arrow function, esse arrow function vai receber como parametro a resposta da requesição (r), esse ere vai transformar a resposta em um json).*

**3.3 - criar uma variavel que vai receber o json da api(2º .then -> que é tambem um caso de sucesso , mas ele por sua vez recebe um arrow function , esse arrow function recebe como parametro um json vindo do primeiro then , depois nesse mesmo then "2º then", é chamado a funçao de estado ou seja a funçao que está criado em cima na useState, essa funçao recebe como argumento o parametro recebido no then (json) ele é responsável por colocar o itens dentro da nossa array vazio que está no useEstate).**

***3.4 - criar um catch para caso de erro , ele recebe um arrow function que recebe como parametro um erro , e dentro desse arrow function é chamado a funçao de estado que recebe como argumento um array vazio.(opcional).***

# 4- chamar funçao  javascript depois do seu fechamento.

##  5- dentro de retorno do componente chame variavel de useState e faça um mapiamento nele já que ele recebeu um array de objetos,
(esse map recebe um arrow function que por sua vez recebe um parametro que é cada item da lista).

# 6- dentro do map retorne um html (um tsx) com as propriedades do item da lista.