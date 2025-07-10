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
  export function readSensor(): number {
    return 42;
  }

  //% subcategory=Actuators
  //% group="Servo"
  //% blockId=codecraftbit-actuator-servo-set
  export function setServo(pos: number) {}

  //% subcategory=Actuators
  //% group="DC Motor"
  //% blockId=codecraftbit-actuator-dcmotor-spin
  export function spinMotor(pos: number) {}

  //% subcategory=Actuators
  //% group="DC Motor"
  //% blockId=codecraftbit-actuator-dcmotor-stop
  export function stopMotor(pos: number) {}
}
