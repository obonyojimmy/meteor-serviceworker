// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by serviceworker.js.
import { name as packageName } from "meteor/obonyojimmy:serviceworker";

// Write your tests here!
// Here is an example.
Tinytest.add('serviceworker - example', function (test) {
  test.equal(packageName, "serviceworker");
});
