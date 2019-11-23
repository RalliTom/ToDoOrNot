// Create userdatabase
var databaseHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
            "users.db",
            "1.0",
            "UserManager",
            1000000);
        this.db.transaction(
            function (tx) {
                //Run SQL Here 
                tx.executeSql(
                    "create table if not exists user(_id int primary key, username text, password text)",
                    [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("Error while creating the table: " + error.message);
                    }
                );
            },
            // Error message
            function (error) {
                console.log("Transaction error:" + error.message);
            },
            function () {
                console.log("Create UserDB transaction completed successfully:");
            },
        );
    }
}
// Create taskdatabase
var taskDbHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase("tasks.db", "1.0", "TaskManager", 1000000);
        this.db.transaction(function (tx) {
            tx.executeSql("create table if not exists kettu(_id int primary key, task text, user text)", [],
                function (tx, results) { },
                function (tx, error) {
                    console.log("Error while creating the table: " + error.message);
                }
            );
        },
            // Error message
            function (error) {
                console.log("Transaction error:" + error.message);
            },
            function () {
                console.log("Create TaskDB transaction completed successfully:");
            },
        );
    }
}
