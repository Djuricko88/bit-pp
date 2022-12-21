/* 3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the projects
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/

function project(descript,lang,repository,stat){
  var obj = {
    description:descript,
    language:lang,
    git: repository,
    status:stat,
    printStatus: function() {
      if(stat) {
        return "In development"
      }
      return "Finished";
    },
    printRepo: function(){
      console.log(repository)
    },
    printWritten: function(){
      if(lang == "JavaScript"){
        return "Using JavaScript";
      }
      return "Not using JavaScript";
    }
  }
  return obj;

}

var func = project("E-Banking","JavaScript","GitHub Profile",true)

console.log(func.printWritten())



