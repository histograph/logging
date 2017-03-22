const log = require("../index.js");

const my_log = new log("api");

my_log.error("aiuto");
my_log.debug("aiuto");


var r = {};
r.items = {};
r.items.length = 3;
r.took = 45;
r.errors = "srerewe";

my_log.info("ES => " + r.items.length + " indexed, took " + r.took + "ms, errors: " + r.errors);
