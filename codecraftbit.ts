/**
 * Codecraft:bit blocks
 */
//% color=#bb1792 block="Codecraft:bit"
//% groups="['DC Motor', 'Servo']"
namespace codecraftbit {
  //% block
  export function foo() {
    console.log("hello world");
  }

  //% subcategory=Sensors
  //% blockId=codecraftbit-sensor-read
  //% block
  export function readSensor(): number {
    return 42;
  }

  //% subcategory=Actuators
  //% blockId=codecraftbit-actuator-servo-set
  //% block
  //% group="Servo"
  export function setServo(pos: number) {}

  //% subcategory=Actuators
  //% blockId=codecraftbit-actuator-dcmotor-spin
  //% block
  //% group="DC Motor"
  export function spinMotor(pos: number) {}

  //% subcategory=Actuators
  //% blockId=codecraftbit-actuator-dcmotor-stop
  //% block
  //% group="DC Motor"
  export function stopMotor(pos: number) {}
}
