import "reflect-metadata";

const formatMetadataKey = Symbol("format");

class Greeter {
  constructor() {}
 
  @format("Y Hello, %s")
  greet(greeting: string) {
    let formatString = getFormat(this, "greet");
    return formatString.replace("%s", greeting);
  }
}

// function enumerable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.enumerable = value;
//   };
// }

/*
class Greeter {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}
*/
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

console.log((new Greeter()).greet('to Me'));
