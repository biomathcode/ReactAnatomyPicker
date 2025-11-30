import type { ComponentType, SVGProps } from "react";
import { InteractiveSVG } from "./InteractiveSVG";

import {
    AdultMaleFront,
    AdultMaleBack,
    AdultFemaleFront,
    AdultFemaleBack,
    ChildMaleFront,
    ChildMaleBack,
    ChildFemaleFront,
    ChildFemaleBack,
    InfantFront,
    InfantBack,
    ToddlerMaleFront,
    ToddlerMaleBack,
    ToddlerFemaleFront,
    ToddlerFemaleBack,
    AbdominalPainMale,
    AbdominalPainFemale,
} from "./Model";

type SelectionFrontValue =
    "head" |
    "eyes" |
    "ears" |
    "nose" |
    "oral_cavity" |
    "neck_or_throat" |
    "chest" |
    "upper_arm" |
    "upper_abdomen" |
    "forearm" |
    "mid_abdomen" |
    "lower_abdomen" |
    "hand" |
    "sexual_organs" |
    "thigh" |
    "knee" |
    "lower_leg" |
    "foot"

type SelectionBackValue =
    "head" |
    "ears" |
    "neck_or_throat" |
    "nape_of_neck" |
    "back" |
    "upper_arm" |
    "elbow" |
    "lower_back" |
    "forearm" |
    "buttocks" |
    "anus" |
    "hand" |
    "thigh" |
    "lower_leg" |
    "foot"

type SelectionFemaleValue = SelectionFrontValue | "breasts"


type InfantFrontValue =
    "head" |
    "eyes" |
    "ears" |
    "nose" |
    "oral_cavity" |
    "chest_and_abdomen" |
    "upper_limb" |
    "lower_limb" |
    "foot"


type InfactBackType =
    "head" |
    "ears" |
    "neck" |
    "back" |
    "upper_limb" |
    "hand" |
    "buttocks" |
    "anus" |
    "lower_limb" |
    "foot"



type AbdominalPainType =
    "upper-right" |
    "upper-middle" |
    "upper-left" |
    "center" |
    "lower-right" |
    "lower-middle" |
    "lower-left"




// -----------------------------
//  VIEW MAP TYPES
// -----------------------------
export const VIEW_MAP = {
    "adult-male-front": AdultMaleFront,
    "adult-male-back": AdultMaleBack,
    "adult-female-front": AdultFemaleFront,
    "adult-female-back": AdultFemaleBack,

    "child-male-front": ChildMaleFront,
    "child-male-back": ChildMaleBack,
    "child-female-front": ChildFemaleFront,
    "child-female-back": ChildFemaleBack,

    "infant-front": InfantFront,
    "infant-back": InfantBack,

    "toddler-male-front": ToddlerMaleFront,
    "toddler-male-back": ToddlerMaleBack,
    "toddler-female-front": ToddlerFemaleFront,
    "toddler-female-back": ToddlerFemaleBack,

    "abdominal-pain-male": AbdominalPainMale,
    "abdominal-pain-female": AbdominalPainFemale,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

export type ViewKey = keyof typeof VIEW_MAP;

// -----------------------------
//  ANATOMY PICKER PROPS
// -----------------------------
export interface AnatomyPickerProps
    extends Omit<SVGProps<SVGSVGElement>, "ref"> {
    model:
    | "adult-male"
    | "adult-female"
    | "child-male"
    | "child-female"
    | "infant"
    | "toddler-male"
    | "toddler-female"
    | "abdominal-pain-male"
    | "abdominal-pain-female";

    orientation?: "front" | "back";

    selected?: string[];
    onPartSelect?: ((part: string) => void) | undefined;

    highlightColor?: string;
}

// -----------------------------
//  COMPONENT
// -----------------------------
export default function AnatomyPicker({
    model = "adult-male",
    orientation = "front",
    selected = [],
    onPartSelect,
    highlightColor = "#0080ff",
    ...props
}: AnatomyPickerProps) {
    const isAbdominalPain =
        model === "abdominal-pain-male" ||
        model === "abdominal-pain-female";

    const key = isAbdominalPain
        ? (model as ViewKey)    // no -front or -back
        : (`${model}-${orientation}` as ViewKey);
    const SvgComponent = VIEW_MAP[key];

    if (!SvgComponent) {
        console.error(
            `[react-anatomy-selector] Invalid view: ${key}. Check model + orientation.`
        );
        return null;
    }

    return (
        <InteractiveSVG
            SvgComponent={SvgComponent}
            selected={selected}
            onPartSelect={onPartSelect}
            highlightColor={highlightColor}
            {...props}
        />
    );
}
