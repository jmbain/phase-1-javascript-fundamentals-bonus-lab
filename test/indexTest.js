require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

const fs = require('fs')
const path = require('path')

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

describe('index.js', function() {
  describe('username', function() {
    it('is declared using let', function () {
      expect(js).to.match(/[^/][^/][ ]*let username/, 'Expected username to be declared using let');
    });

    it('is a string', function () {
      expect(typeof username).to.equal('string', 'Expected the data type of username to be a string');
    });

    it("is set to the value 'alice123'", function () {
      expect(username).to.equal('alice123');
    });
  });

  describe('password', function() {
    it('is declared using let', function () {
      expect(js).to.match(/[^/][^/][ ]*let password/, 'Expected password to be declared using let');
    });

    it('is a string', function () {
      expect(typeof password).to.equal('string', 'Expected the data type of password to be a string');
    });

    it("is set to the value 'flatironschool'", function () {
      expect(password).to.equal('flatironschool');
    });
  });

  describe('loginValidationPhrase', function() {
    it('is declared using const', function() {
      expect(js).to.match(/[^/][^/][ ]*const loginValidationPhrase/, "Expected loginValidationPhrase to be declared using const");
    });

    it('is a string', function() {
      expect(typeof loginValidationPhrase).to.equal('string', 'Expected the data type of loginValidationPhrase to be a string');
    });

    it("is set to the value 'Welcome alice123', if the username and password are correct, otherwise is set to the value 'Invalid username or password! Please try again!'", function() {
      if(username === 'alice123' && password == 'flatironschool'){
        expect(loginValidationPhrase).to.equal('Welcome alice123!');
      }
      else{
        expect(loginValidationPhrase).to.equal('Invalid username or password!');
      }
    });

    it("uses string concatenation to combine 'Welcome ' with the username variable and '!'", function() {
      expect(js).to.match(/[^/][^/][ ]*const loginValidationPhrase/, "Expected loginValidationPhrase to be declared using const");
      expect(js).to.match(/["']Welcome ["'](\n)*[ ]*(\n)*\+(\n)*[ ]*(\n)*username(\n)*[ ]*(\n)*\+(\n)*[ ]*(\n)*["']!["']/, 'Expected the use of string concatenation')
    });
  });

  describe('randomNumber', function() {
    it('is declared using const', function() {
      expect(js).to.match(/[^/][^/][ ]*const randomNumber/, 'Expected randomNumber to be declared using const');
    });

    it('is a number', function() {
      expect(typeof randomNumber).to.equal('number', 'Expected the data type of randomNumber to be a number');
    });

    it('is an integer (whole number)', function() {
      expect(Number.isInteger(randomNumber)).to.equal(true, 'Expected randomNumber to be an integer (not a decimal number)');
    });

    it('is a random number generated by Math.random()', function() {
      expect(js).to.match(/[^/][^/][ ]*const randomNumber/, 'Expected randomNumber to be declared using const');
      expect(js).to.match(/Math.random()/, 'Expected randomNumber to be a random number generated by Math.random()');
    });

    it('is set to a value that is between 1 and 10', function() {
      expect(randomNumber >= 1).to.equal(true, 'Expected randomNumber to be a random number between 1 and 10');
      expect(randomNumber <= 10).to.equal(true, 'Expected randomNumber to be a random number between 1 and 10');
    });
  });

  describe('luckyNumberPhrase', function() {
    it('is declared using const', function() {
      expect(js).to.match(/[^/][^/][ ]*const luckyNumberPhrase/, 'Expected luckyNumberPhrase to be declared using const');
    });

    it('is a string', function() {
      expect(typeof luckyNumberPhrase).to.equal('string', 'Expected the data type of luckyNumberPhrase to be a string');
    });

    it("contains 'Your lucky number is ' as part of the string", function() {
      expect(luckyNumberPhrase.includes('Your lucky number is ')).to.equal(true, "Expected the luckyNumberPhrase string to include 'Your lucky number is ' as part of the string");
    });

    it('contains the value of randomNumber as part of the string', function() {
      expect(luckyNumberPhrase.includes(randomNumber)).to.equal(true, 'Expected the luckyNumberPhrase string to include the value of the randomNumber variable as part of the string');
    });

    it("contains '!' as part of the string", function() {
      expect(luckyNumberPhrase.includes('!')).to.equal(true, "Expected the luckyNumberPhrase string to include '!' as part of the string");
    });

    it("uses string interpolation to combine 'Your lucky number is ' with the randomNumber variable and '!'", function() {
      expect(js).to.match(/[^/][^/][ ]*const luckyNumberPhrase/, 'Expected luckyNumberPhrase to be declared using const');
      expect(js).to.match(/Your lucky number is \${randomNumber}!/, 'Expected the use of string interpolation')
    });
  });
});