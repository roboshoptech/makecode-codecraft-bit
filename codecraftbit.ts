enum Motors {
  //% block="motor M1"
  CCB_M1 = 0,
  //% block="motor M2"
  CCB_M2 = 1,
  //% block="both motors"
  CCB_Both = 2,
}

enum Servos {
  //% block="servo P0"
  PeaZero = 0,
  //% block="servo P1"
  PeaOne = 1,
  //% block="servo P2"
  PeaTwo = 2,
}

/**
 * Codecraft:bit blocks
 */
//% color=#bb1792 block="Codecraft:bit"
//% groups="['DC Motor', 'Servo']"
namespace codecraftbit {
  //% subcategory=Sensors
  //% block
  export function readPotentiometer(): number {
    return pins.analogReadPin(AnalogPin.P9);
  }

  const SERVO_PINS = [AnalogPin.P0, AnalogPin.P1, AnalogPin.P2];

  //% subcategory=Actuators
  //% block="set %servo to %position degrees"
  //% group="Servo"
  //% position.min=0 position.max=180
  export function setServo(servo: Servos, position: number) {
    pins.servoWritePin(SERVO_PINS[servo], position);
  }

  //% subcategory=Actuators
  //% block="run %motor at %speed"
  //% group="DC Motor"
  //% speed.min=-100 speed.max=100
  export function spinMotor(motor: Motors, speed: number) {
    if (speed == 0) {
      this.stopMotor(motor);
    }
    const analogSpeed = (Math.abs(speed) * 1024) / 100;
    const dir = Math.sign(speed);
    if (motor == Motors.CCB_Both) {
      doSpinMotor(Motors.CCB_M1, dir, analogSpeed);
      doSpinMotor(Motors.CCB_M2, dir, analogSpeed);
    } else {
      doSpinMotor(motor, dir, analogSpeed);
    }
  }

  const MOTOR_PINS = [
    [DigitalPin.P4, DigitalPin.P5, DigitalPin.P6],
    [DigitalPin.P10, DigitalPin.P11, DigitalPin.P12],
  ];

  function doSpinMotor(motor: number, dir: number, speed: number) {
    const [p1, p2, p3] = MOTOR_PINS[motor];
    pins.digitalWritePin(p1, speed);
    pins.digitalWritePin(dir == 1 ? p2 : p3, 1);
    pins.digitalWritePin(dir == 1 ? p3 : p2, 0);
  }

  //% subcategory=Actuators
  //% block
  //% group="DC Motor"
  export function stopMotor(motor: Motors) {
    const [p1, p2, p3] = MOTOR_PINS[motor];
    pins.digitalWritePin(p1, 0);
    pins.digitalWritePin(p2, 0);
    pins.digitalWritePin(p3, 0);
  }
}
