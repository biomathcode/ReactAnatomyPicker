import { AnatomyPicker } from '../../src'

const list = ["adult-male", "adult-female", "child-male", "child-female", "infant", "toddler-male", "toddler-female", "abdominal-pain-male", "abdominal-pain-female"]

export function App() {
  return (
    <div>
      {
        list.map((e: any) => <AnatomyPicker
          model={e}
          orientation="front"
          selected={["chest", "neck_or_throat"]}
          onSelect={(p) => {
            console.log('p', p)
          }}
          width={100}
          height={50}
        />)
      }
    </div>
  )
}
