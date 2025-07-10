/**
 * Codecraft:bit blocks
 */
//% color=#bb1792 block="Codecraft:bit"
//% groups="['DC Motor', 'Servo']"
namespace codecraftbit {
  //% subcategory=Sensors
  //% block
  export function foo() {
    console.log("hello world");
  }

  //% subcategory=Sensors
  //% block
  export function readSensor(): number {
    return 42;
  }

  //% subcategory=Actuators
  //% block
  //% group="Servo"
  export function setServo(pos: number) {}

  //% subcategory=Actuators
  //% block
  //% group="DC Motor"
  export function spinMotor(pos: number) {}

  //% subcategory=Actuators
  //% block
  //% group="DC Motor"
  export function stopMotor(pos: number) {}
}
