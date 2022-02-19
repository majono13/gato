function openNav() {
    var x = document.getElementById("menu")

    if (x.className === "menu") {
        x.className += " menu-mobile"
    }

    else {
        x.className = "menu"
    }
}

function calcular() {
    var tipo = document.getElementsByName('tipo')
    var idade = document.getElementById('idade')
    var res = document.getElementById('res')

    var id = Number(idade.value)

    if (idade.value.length == 0) {
        alert("Por favor, digite a idade do seu gatinho!")
    }

    else if (tipo[0].checked) { /*meses*/

        if (id <= 1) {/*0-1 mês*/
            res.innerHTML = `Seu gato tem cerca de um ano de idade na idade felina, ele ainda é um filhote.
            Os bichanos bebês também são muito ativos e adoram se divertir! Por isso, ofereça brinquedos e outros estímulos ambientais para que ele queime toda esta energia. Cuidando bem de seu amigo, ele chegará saudável à idade adulta!`
        }

        if (id > 1 && id <= 3) {

            res.innerHTML = `Seu gato tem cerca de 4 anos de idade na idade felina, ele ainda é um filhote.
                Os bichanos bebês também são muito ativos e adoram se divertir! Por isso, ofereça brinquedos e outros estímulos ambientais para que ele queime toda esta energia. Cuidando bem de seu amigo, ele chegará saudável à idade adulta!`

        }

        if (id > 3 && id <= 4) {

            res.innerHTML = `Seu gato tem cerca de 8 anos de idade na idade felina, ele ainda é um filhote.
                Os bichanos bebês também são muito ativos e adoram se divertir! Por isso, ofereça brinquedos e outros estímulos ambientais para que ele queime toda esta energia. Cuidando bem de seu amigo, ele chegará saudável à idade adulta!`

        }

        if (id > 4 && id <= 6) {

            res.innerHTML = `Seu gato tem cerca de 10 anos de idade na idade felina, ele ainda é um filhote.
                Os bichanos bebês também são muito ativos e adoram se divertir! Por isso, ofereça brinquedos e outros estímulos ambientais para que ele queime toda esta energia. Cuidando bem de seu amigo, ele chegará saudável à idade adulta!`

        }

        if (id > 6 && id <= 7) {

            res.innerHTML = `Seu gato tem cerca de 12 anos de idade na idade felina, ele ainda é um filhote.
                Os bichanos bebês também são muito ativos e adoram se divertir! Por isso, ofereça brinquedos e outros estímulos ambientais para que ele queime toda esta energia. Cuidando bem de seu amigo, ele chegará saudável à idade adulta!`

        }

        if (id > 7 && id <= 12) {

            res.innerHTML = `Seu gato tem cerca de 15 anos de idade na idade felina, ele está entrando na fase adulta. A fase adulta começa aos 12 meses.`

        }

    }

    else if (tipo[1].checked) {

        if (id => 1 && id <= 2) {

            res.innerHTML = `Seu gato tem cerca de 24 anos de idade na idade felina, ele já é um adulto.
            Seu gato adulto ainda vai brincar bastante, então ofereça muitos estímulos! Eles também podem assumir seu comportamento noturno e acordar você de vez em quando.`

        }


        if (id > 2 && id <= 3) {

            res.innerHTML = `Seu gato tem cerca de 28 anos de idade na idade felina, ele já é um adulto.
            Seu gato adulto ainda vai brincar bastante, então ofereça muitos estímulos! Eles também podem assumir seu comportamento noturno e acordar você de vez em quando.`

        }

        if (id > 3 && id <= 4) {

            res.innerHTML = `Seu gato tem cerca de 32 anos de idade na idade felina, ele já é um adulto.
            Seu gato adulto ainda vai brincar bastante, então ofereça muitos estímulos! Eles também podem assumir seu comportamento noturno e acordar você de vez em quando.`

        }

        if (id > 4 && id <= 5) {

            res.innerHTML = `Seu gato tem cerca de 36 anos de idade na idade felina, ele já é um adulto.
            Seu gato adulto ainda vai brincar bastante, então ofereça muitos estímulos! Eles também podem assumir seu comportamento noturno e acordar você de vez em quando.`

        }

        if (id > 5 && id <= 6) {

            res.innerHTML = `Seu gato tem cerca de 40 anos de idade na idade felina, ele já é um adulto.
            Seu gato adulto ainda vai brincar bastante, então ofereça muitos estímulos! Eles também podem assumir seu comportamento noturno e acordar você de vez em quando.`

        }

        if (id > 6 && id < 7) {

            res.innerHTML = `Seu gato tem cerca de 44 anos de idade na idade felina, ele já é um adulto.
            Seu gato adulto ainda vai brincar bastante, então ofereça muitos estímulos! Eles também podem assumir seu comportamento noturno e acordar você de vez em quando.`

        }

        if (id > 7) {

            res.innerHTML = `Quando os bichanos atingem os 7 anos passam a ser considerados idosos. Isso significa que seu amigo já está mais cansado e já aproveitou bastante os prazeres de sua vida de gato.

            A partir de agora, é provável que o pet durma boa parte do tempo, e não brinque tanto quanto antigamente. Por isso, a dieta dos gatos idosos também deve ser diferente.`

        }

    }
}