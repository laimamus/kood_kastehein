// Harjutus 1//
function harjutus1(nimi) {
      console.log('Tere, ${nimi}! ');
    } 

 //Harjutus 2//
 function harjutus2(mark, mudel, värv){
    console.log('Minu auto on ${värv} ${mark} ${mudel}.');
  }

//Harjutus 3//
function harjutus3(pindala, kõrgus){
    const ruumala = (1/3)*PõhjaPindala*kõrgus
    console.log("Püramiidi pindala on" + ruumala);
}

//Harjutus 4//
function luhendaNimi(nimi) {
    if (nimi.length > 5) {
     
      nimi = nimi.slice(0, 5) + "...";
    }
  
    console.log('Nimi on ${nimi}');
  }

//Harjutus 5//
function harjutus5(nimi) {
  let pööratudNimi = nimi.split('').reverse().join('');
  console.log("Pööratud string on" + pööratudNimi);
}
  
//Harjutus 6//
function harjutus6() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

//Harjutus 7//
function harjutus7() {
    let i = 100;
  
    while (i >= 1) {
      console.log(i);
      i--;
    }
  }
  

//Harjutus 10//
function harjutus10() {
  const myNameComponents = ['Samuel', 'L', 'Jackson'];
  const nimi = myNameComponents.join(' ');
  console.log(`Minu nimi on ${nimi}.`);
}


//Harjutus 11//
function harjutus11(hinded) {
    let summa = 0;
  
    for (hinne of hinded) {
      summa += hinne; //summa = summa + hinne//
    }
    let keskmineHinne = summa / hinded.length;
    console.log(`Õpilase keskmine hinne on ${keskmineHinne}.`);
  }
  
//Harjutus 12//
function harjutus12 () {
    for(let i = 1; i <= 100; i++) {
        let output = "";

        if ((i % 3 === 0) && (i % 5 === 0)) {
            output += 'Lütseum';
          }

          else if (i === 50) {
            output = `Tallinna Prantsuse Lütseum`
        }

        else if (i % 3 === 0) {
            output += `Tallinna`;
        }
// % ehk jääk//
        else if (i % 5 === 0) {
            output += `Prantsuse`;
        }

        console.log(output);

    }

}


//Harjutus 13//

function harjutus13() {
    
    const input = prompt("Sisetage komadega eraldatud nimed:");
    const namesArray = input.split(",");
  
    
    if (namesArray.includes("Marek")) {
      console.log("Marek on massiivis.");
    } else {
      console.log("Marek ei ole massiivis.");
    }
  }
  

  // Harjutus 14//

  let inimesed = [
    {
        nimi: "Alice",
        vanus: 28,
        address: "Park 7",
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: "Bob",
        vanus: 32,
        address: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: "Marek",
        vanus: 22,
        address: "Metsatee 3",
        telefon: '8594032',
        email: 'marek@example.com'
    }
];

function harjutus14(inimesed) {
  let vanemInimene = null;
  let pikemAddress = null;
  let lühemTelefoniNumber = null;
  let eestiEmail = null;

  for (const inimene of inimesed) {
    if (!vanemInimene || inimene.vanus > vanemInimene.vanus) {
      vanemInimene = inimene;
    }

    if (!pikemAddress || inimene.address.pikkus > pikemAddress.address.pikkus) {
      pikemAddress = inimene;
    }

    if (!lühemTelefoniNumber || inimene.telefon.pikkus < lühemTelefoniNumber.telefon.pikkus) {
      lühemTelefoniNumber = inimene;
    }

    if (inimene.email.includes("eesti")) {
      eestiEmail = inimene;
    }
  }

  console.log("Kõige vanema inimese nimi:", vanemInimene.nimi);
  console.log("Inimese nimi, kellel on kõige pikem address:", pikemAddress.nimi);
  console.log("Inimese nimi, kellel on kõige lühem telefoninumber:", lühemTelefoniNumber.nimi);
  console.log("Inimese nimi, kelle e-posti addressis sisaldub sõna aaeesti :", eestiEmail.nimi);
}


