# react-anatomy-picker



[![npm version](https://img.shields.io/npm/v/react-anatomy-picker?color=blue\&label=npm)](https://www.npmjs.com/package/react-anatomy-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-anatomy-picker?color=green\&label=downloads)](https://www.npmjs.com/package/react-anatomy-picker)
[![Storybook](https://img.shields.io/badge/Storybook-Demo-orange)](https://biomathcode.github.io/ReactAnatomyPicker)


A React component for selecting anatomical regions on a human body diagram.

# 📦 Installation

```bash
npm install react-anatomy-picker
# or
yarn add react-anatomy-picker
# or
pnpm add react-anatomy-picker

```

### Usage Example


```jsx
import { AnatomyPicker, AdultMaleFront } from "react-anatomy-picker";
import { useState } from "react";

export default function Demo() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <AnatomyPicker
      SvgComponent={AdultMaleFront}
      selected={selected}
      highlightColor="#1471C9"
      onPartSelect={(part) =>
        setSelected((prev) =>
          prev.includes(part)
            ? prev.filter((p) => p !== part)
            : [...prev, part]
        )
      }
      style={{ width: 400 }}
    />
  );
}
```

# 🔥 Features

- 🎨 **Interactive SVG-based anatomy selection**
- 🧍 Supports various anatomy types:
  - Adult Male (Front / Back)
  - Adult Female (Front / Back)
  - Child (Male/Female)
  - Toddler (Front/Back)
  - Infant
- 🖱️ Hover + Click highlight
- 🎯 Multi-select support (`selected: string[]`)
- ♿ Accessible with `aria-selected`
- 🎛️ Custom highlight color
- ⚡ Tiny bundle & tree-shakeable
- 🧩 Fully written in TypeScript

---

## Anatomy Models

<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/biomathcode/ReactAnatomyPicker/main/asserts/male_front.png" width="200" /></td>
    <td><img src="https://raw.githubusercontent.com/biomathcode/ReactAnatomyPicker/main/asserts/female_front.png" width="200" /></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/biomathcode/ReactAnatomyPicker/main/asserts/infant.png" width="200" /></td>
    <td><img src="https://raw.githubusercontent.com/biomathcode/ReactAnatomyPicker/main/asserts/toddler_back.png" width="200" /></td>
  </tr>
</table>
b


## Development

- Install dependencies:

```bash
npm install
```

- Run the playground:

```bash
npm run play
```

- Run the unit tests:

```bash
npm run test
```

- Build the library:

```bash
npm run build
```
