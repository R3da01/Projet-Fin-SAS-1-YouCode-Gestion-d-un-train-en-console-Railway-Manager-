var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = []



function showTrips() {
 console.log("=== TRAJETS DISPONIBLES ===");

    for (let i = 0; i < trips.length; i++){
    console.log(`#${trips[i].id} ${trips[i].departure} → ${trips[i].destination} | ${trips[i].departureTime} - ${trips[i].arrivalTime} | ${trips[i].price} DH | Places: ${trips[i].availableSeats}`);
  }
}




function buyTicket(){
  console.log("=== ACHETER UN TICKET ===");
   let name = prompt("Nom du passager : ");
  let tripId = Number(prompt("ID du trajet : "));
  let trip = null;
    for (let i = 0; i < trips.length; i++) 
        {
        if (trips[i].id === tripId) 
            {
            trip = trips[i];
            break;
        }
    }

    if (trip === null) 
        {
        console.log("Trajet introuvable.");
        return;
    }

    if (trip.availableSeats <= 0) {
        console.log("Train complet.");
        return;
    }

    let seatNumber = 51 - trip.availableSeats;

    let ticket = {
        id: tickets.length + 1,
        passengerName: name,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };
    tickets.push(ticket);
    trip.availableSeats--;
  console.log("Ticket acheté avec succès.");
  console.log(`Ticket #${ticket.id}`);
  console.log(`Passager : ${ticket.passengerName}`);
  console.log(`Traget: ${trip.departure} → ${trip.destination}`)
  console.log(`Place : ${ticket.seatNumber}`);
  console.log(`Prix : ${ticket.price} DH`);
        }


function showTickets() 
{
    console.log("=== TICKETS ===");
    if (tickets.length === 0) 
        {
        console.log("Aucun ticket enregistré.");
        return;
    }
    for (let i = 0; i < tickets.length; i++)
         {
        let ticket = tickets[i];
        let trip = null;
        for (let j = 0; j < trips.length; j++) 
            {
            if (trips[j].id === ticket.tripId) 
                {
                trip = trips[j];
                break;
            }
        }
  console.log(`Ticket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH`);

    }
}




function cancelTicket()
{
    console.log("=== ANNULER UN TICKET ===");
    let ticketId = Number(prompt("Identifiant du ticket : "));
    let ticketIndex = -1;
    for (let i = 0; i < tickets.length; i++) 
        {
        if (tickets[i].id === ticketId) 
            {
            ticketIndex = i;
            break;
        }
    }
    if (ticketIndex === -1) 
        {
        console.log("Ticket introuvable.");
        return;
    }
    let ticket = tickets[ticketIndex];
    let trip = null;
    for (let i = 0; i < trips.length; i++)
        {
        if (trips[i].id === ticket.tripId) 
            {
            trip = trips[i];
            break;
        }
    }
    tickets.splice(ticketIndex, 1);
    trip.availableSeats++;
    console.log("Ticket annulé avec succès.");
}



function searchTicket() 
{
    console.log("=== RECHERCHER UN TICKET ===");
    let name = prompt("Nom du passager : ");
    let found = false;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].passengerName.toLowerCase() === name.toLowerCase()) 
            {
            let trip = null;
            for (let j = 0; j < trips.length; j++) {
                if (trips[j].id === tickets[i].tripId) 
                    {
                    trip = trips[j];
                    break;
                }
            }
            console.log(`Ticket #${tickets[i].id}`);
            console.log(`Passager : ${tickets[i].passengerName}`);
            console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
            console.log(`Place : ${tickets[i].seatNumber}`);
            console.log(`Prix : ${tickets[i].price} DH`);
            found = true;
        }
    }
    if (found === false) {
        console.log("Aucun ticket trouvé.");
    }
}




function filterTrips() 
{
    console.log("=== FILTRER LES TRAJETS ===");
    let departure = prompt("Ville de départ : ");
    let found = false;
    for (let i = 0; i < trips.length; i++) {
        if ( trips[i].departure.toLowerCase() === departure.toLowerCase()) 
            {
            console.log(`${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH`);
            found = true;
        }
    }
    if (found === false) {
        console.log("Aucun trajet trouvé.");
    }
}



function sortTrips()
 {  
     console.log("=== TRAJETS TRIÉS PAR PRIX ===");
    for (let i = 0; i < trips.length - 1; i++) {
        for (let j = 0; j < trips.length - 1 - i; j++) 
            {
            if (trips[j].price > trips[j + 1].price) 
                {
                let temp = trips[j];
                trips[j] = trips[j + 1];
                trips[j + 1] = temp;
                }
            }
    }
    for (let i = 0; i < trips.length; i++) {
        console.log(`${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH `);
    }
}


function menu() 
{
    let choice = "";
    for (let i = 0; choice !== "0"; i++) 
        {
        console.log(`=================================
        RAILWAY MANAGER
=================================

1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter`);
        choice = prompt("Votre choix : ");
        if (choice === "1") 
            {
            showTrips();
        }
         else if (choice === "2") 
            {
            buyTicket();
        }

         else if (choice === "3") 
            {
            showTickets();
        }
         else if (choice === "4") 
            {
            cancelTicket();
        }
         else if (choice === "5") 
            {
            searchTicket();
        }
         else if (choice === "6") 
            {
            filterTrips();
        }
         else if (choice === "7") 
            {
            sortTrips();
        }
         else if (choice === "0") 
            {
            console.log("Au revoir !");
        }
         else 
            {
            console.log("Choix invalide.");
        }
    }
}
menu();
