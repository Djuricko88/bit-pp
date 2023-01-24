/* Bookmakers exercise using Object Oriented Programming */

"use strict";

(function () {

  /* constructor function for Country */
  function Country(name, odds, continent) {
    this.countryName = name;
    this.odds = odds;
    this.continent = continent;
    this.countryShort = function () {
      var countryArr = this.countryName.split("");
      var lastCountryLetter = "";
      var vowels = ["A", "E", "I", "O", "U"];
      for (var i = 1; i < countryArr.length; i++) {
        if (!vowels.includes(countryArr[i].toUpperCase())) {
          lastCountryLetter = countryArr[i].toUpperCase();
          break;
        }
      }
      return countryArr[0] + lastCountryLetter;
    };

  };
  /* constructor function for Person */
  function Person(name, lastname, date) {
    this.personName = name;
    this.personLastname = lastname;
    this.dateOfBirth = new Date(date).getFullYear();
    this.getData = function () {
      var personDate = new Date(date).toLocaleDateString("en-GB");
      var dateSplit = personDate.split("/");
      dateSplit = dateSplit[1] + "." + dateSplit[0] + "." + dateSplit[2];
      return this.personName + " " + this.personLastname + " " + dateSplit;
    }
  };

  /* constructor function for Player */
  function Player(person, betAmount, country) {
    this.player = person.personName + " " + person.personLastname;
    this.betAmount = betAmount;
    this.country = country;
    this.getData = function () {
      var currentYear = new Date();
      currentYear = currentYear.getFullYear();
      return "\t\t\t\t" + this.country.countryShort() + ", " + (this.country.odds * this.betAmount) + " eur, " + this.player + ", " + (currentYear - person.dateOfBirth) + " years";
    };
  };

  /* constructor function for Address */
  function Address(country, city, postalCode, street, streetNumber) {
    this.country = country.countryName;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
    this.getData = function () {
      return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + this.country;
    };
  };

  /* constructor function for BettingPlace */
  function BettingPlace(address) {
    this.bettingAddress = address;
    this.players = [];
    this.addplayer = function (player) {
      this.players.push(player);
    };
    this.getData = function () {
      var sum = 0;
      for (var i = 0; i < this.players.length; i++) {
        sum += this.players[i].betAmount;
      }
      return "\t\t" + this.bettingAddress.street + " " + this.bettingAddress.postalCode + " " + this.bettingAddress.city + ", sum of all bets " + sum;
    };
  };

  /* constructor function for BettingHouse */
  function BettingHouse(competition) {
    this.competition = competition;
    this.bettingPlaces = [];
    this.addBettingPlaces = function (bettPlace) {
      this.bettingPlaces.push(bettPlace);
    };
    this.sumOfPlayers = function () {
      var sum = 0;
      this.bettingPlaces.forEach((element) => {
        sum += element.players.length;
      });
      return sum;
    };
    this.getData = function () {
      var bettingPlacesData = "";
      this.bettingPlaces.forEach((element) => {
        bettingPlacesData += element.getData() + "\n";
        for (var i = 0; i < element.players.length; i++) {
          bettingPlacesData += element.players[i].getData() + "\n";
        }
      });
      return (
        this.competition +
        ", " +
        this.bettingPlaces.length +
        " betting places, " +
        this.sumOfPlayers() +
        " bets" +
        "\n" +
        bettingPlacesData
      );
    };


  };

  /* continents object */
  var Continent = {
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTH_AMERICA: "SA",
    NORTH_AMERICA: "NA",
    AISTRALIA: "AU"
  };

  /* function for creatign player object */
  function createPlayer(name, lastname, birth, amount, country) {
    var person = new Person(name, lastname, birth);
    var player = new Player(person, amount, country);

    return player;
  }

  /* function for creating betting place object */
  function createBettingPlace(country, city, postal, street, streetNo) {
    var placeAddress = new Address(country, city, postal, street, streetNo);
    var bettingPlace = new BettingPlace(placeAddress);

    return bettingPlace;
  }

  /* creating Country instance objects */
  var country1 = new Country("Serbia", 1.5, Continent.EUROPE);
  var country2 = new Country("Hungary", 2.5, Continent.EUROPE);

  /* creating players */
  var player1 = createPlayer("Pera", "Peric", "03/13/1992", 1500, country1);
  var player2 = createPlayer("Laza", "Lazic", "04/11/1991", 5000, country2);
  var player3 = createPlayer("Marko", "Markovic", "15/01/1995", 500, country1);
  var player4 = createPlayer("Joca", "Kurbla", "25/05/1995", 7000, country2);

  /* creatign betting places */
  var bettingPlace1 = createBettingPlace(country1, "Belgrade", 11000, "Nemanjina", 4);
  var bettingPlace2 = createBettingPlace(country2, "Belgrade", 11000, "Nemanjina", 4);

  /* adding players to betting places */
  bettingPlace1.addplayer(player1);
  bettingPlace1.addplayer(player2);
  bettingPlace2.addplayer(player3);
  bettingPlace2.addplayer(player4);

  /* creating beeting house instance objects */
  var house = new BettingHouse("Mundial");

  /* adding betting places to betting house */
  house.addBettingPlaces(bettingPlace1);
  house.addBettingPlaces(bettingPlace2);

  /* display all datas */
  console.log(house.getData());

})();