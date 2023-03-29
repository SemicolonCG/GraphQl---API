import { ValueObject } from "./ValueObject";

interface DescriptionProps {
  value: string
}

export default class Description extends ValueObject<DescriptionProps> {

  private constructor(props: DescriptionProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  // Can't use the `new` keyword from outside the scope of the class.

  public static create(description: string): Description {
    if (description === undefined || description === null || description.length <= 2 || description.length > 100) {
      throw new Error('Description word must be grater than 2 chars and less than 100.')
    } else {
      return new Description({ value: description })
    }
  }
}