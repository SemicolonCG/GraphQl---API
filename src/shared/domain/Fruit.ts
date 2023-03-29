import Description from "./description";
import { Entity } from "./Entity";


interface UserProps {
  name: String,
  description: Description,
  amount: Number,
  limit: Number,
  isActive: Boolean,
  createdAt: String,
  updatedAt: String

}


export default class Fruits extends Entity<UserProps> {

  get name(): String {
    return this.props.name;
  }
  constructor(props: UserProps) {
    super(props);
  }

}