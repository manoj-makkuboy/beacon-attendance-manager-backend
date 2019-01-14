const sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("./helloWorld.sqlite");
console.log("Database helloWorld.sqlite created in project home directory");

db.serialize(function() {
  db.run(
    "CREATE TABLE attendance (name VARCAR(50), mobile VARCAR(10), time VARCAR(100), activity VARCAR(10))"
  );

  // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  // for (var i = 0; i < 10; i++) {
  //     stmt.run("Ipsum " + i);
  // }
  // stmt.finalize();

  // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  // });
});

// db.close();

var markActivity = (activity) => {
  console.log('mark activity called')
  db.run(
    `insert into attendance values ('${activity.name}', '${activity.mobile}', datetime('now', 'localtime'), '${activity.activity}');`
  );
};

module.exports = { markActivity };
