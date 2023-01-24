"use strict";

(function() {
    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function() {
        return this.name[0] + this.name[this.name.length - 1];
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function() {
        return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
    }

    function Program(date) {
        this.date = date;
        this.movies = [];
    }

    Program.prototype.addMovie = function(movie) {
        this.movies.push(movie);
    }

    Program.prototype.getData = function() {
        var totalLength = 0;
        var movieData = '';
        this.movies.forEach(function(movie) {
            totalLength += movie.length;
            movieData += '\t' + movie.getData() + '\n';
        });
        return this.date + ', program duration ' + totalLength + 'min\n' + movieData;
    }

    function Festival(name) {
        this.name = name;
        this.programs = [];
    }

    Festival.prototype.addProgram = function(program) {
        this.programs.push(program);
    }

    Festival.prototype.getData = function() {
        var totalMovies = 0;
        var programData = '';
        this.programs.forEach(function(program) {
            totalMovies += program.movies.length;
            programData += program.getData() + '\n';
        });
        return this.name + ' has ' + totalMovies + ' movie titles\n' + programData;
    }

    function createMovie(title, length, genre) {
        var genre = new Genre(genre);
        return new Movie(title, genre, length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    var fest = new Festival('Weekend festival');
    var program1 = createProgram('28.10.2017');
    var program2 = createProgram('29.10.2017');
    var movie1 = createMovie('Spider-Man: Homecoming', 133, 'Action');
    var movie2 = createMovie('War for the Planet of the Apes', 140, 'Drama');
    var movie3 = createMovie('The Dark Tower', 95, 'Western');
    var movie4 = createMovie('Deadpool', 108, 'Comedy');
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program2.addMovie(movie4);
    fest.addProgram(program1);
    fest.addProgram(program2);
    console.log(fest.getData());
})();