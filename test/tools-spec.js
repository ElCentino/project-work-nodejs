const expect = require('chai').expect;

const lib = require("../lib/test_database");

describe("Connect()", function() {

    this.timeout(5000);

    it("Should connect to the database", function(done) {

        var test = lib.connect(function(result) {

            expect(result).to.be.ok;
            done();
        });
    });
});