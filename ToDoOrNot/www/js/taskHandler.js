var taskHandler = {
    //Add the record in database, it adds record or row in Web SQL
    addTask: function (task) {

        let userid = window.localStorage.getItem("user");
        let taskId = userid + task + Math.random() * 100 + 1;
        taskDbHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into kettu(_id, task, user) values(?, ?, ?)",
                    [taskId, task, userid],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add task error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}
