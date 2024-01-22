        /*
        Isso é um comentario...
        Projeto para as aulas da turma
        
       //Isto também é um comentario

        //Monstrar uma mensagem e pegar uma informação
       prompt("Qual é o seu nome?")

       /*Mostrar uma mensagem, pergunt6ando algo. If e Else serve para dar opções
       If: Caso a opção seja Afirmativa, mostrará uma mensagem
       Else: Caso a opção seja Negativa, mostrará uma mensagem diferente
       
       studing = confirm("Está estudando no momento?")
       console.log(studing);

       if(studing) {
        alert("Parabéns, não é um analfabeto")
       }
       else {
        alert("Vai estudar vagabundo")
       }

       document.write("LIBBS 2024" + "<br>")

       var nome = "Ruan Viana";
       var endereço = "Rua da minha casa";
       var telefone = "11 9000-0007";
       const anoNascimento = 2005;

       document.write(nome + "<br>")
       document.write(endereço + "<br>")
       document.write(telefone + "<br>")
       document.write(anoNascimento + "<br>")

       console.log("Estou aqui...")

      //Mostrar uma mensagem 
      alert("Você chegou aqui...")*/

       
      var idade;

     idade =  prompt("Qual é a sua idade?")

      if(idade <= 17) {
        alert("Muito nova, vai brincar!")
      }

      else if(idade >= 18 && idade < 24) {
        alert("Parabéns, pode tirar a sua carteira!!!")
      }

      else if(idade >= 25 && idade <= 49) {
        alert("Já não precisa morar na casa do papai!")
      }

      else if(idade >= 50) {
        alert("Nada de neto?!")
      } 
