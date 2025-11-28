import { AdultFemaleBack, AdultFemaleFront, MyButton } from '../../src'

import {
  AdultMaleFront,
  AdultMaleBack,
  ChildMaleFront,
  ChildMaleBack,
  ChildFemaleBack,
  ChildFemaleFront,
  ToddlerFemaleBack,
  ToddlerFemaleFront,
  ToddlerMaleBack,
  ToddlerMaleFront,
  InfantBack,
  InfantFront,
} from '../../src'

export function App() {
  return (
    <div>
      <AdultMaleFront />
      <AdultMaleBack />
      <AdultFemaleBack />
      <AdultFemaleFront />
      <ChildFemaleBack />
      <ChildFemaleFront />
      <ChildMaleFront />
      <ChildMaleBack />
      <ToddlerMaleFront />
      <ToddlerMaleBack />
      <ToddlerFemaleFront />
      <ToddlerFemaleBack />
      <InfantFront />
      <InfantBack />
    </div>
  )
}
