// using surrogate

Function.prototype.inherits = function (SuperClass) {
  function Surrogate () {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}; 

Function.prototype.inherits2 = function (SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};

function MovingThing (name) {
  this.name = name;
}

MovingThing.prototype.flying = function () {
  console.log(this.name + " zooms!");
}

function Asteroid (name) {
  MovingThing.call(this, name);
};

Asteroid.inherits(MovingThing);

Asteroid.prototype.clunks = function () {
  console.log(this.name + " clunks!");
};

const chunks = new Asteroid("Chunks");
chunks.flying();
chunks.clunks();
