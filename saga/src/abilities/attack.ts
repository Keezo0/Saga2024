export class Attack {
  damage: number;
  control: boolean = false;
  constructor(damage: number, control: boolean) {
    this.damage = damage;
    this.control = control;
  }

  public get Damage() {
    return this.damage;
  }

  public get ControlState() {
    return this.control;
  }
}
