import { useEffect, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";

import styles from "./InteractiveSVG.module.css";


export interface InteractiveSVGProps
    extends Omit<SVGProps<SVGSVGElement>, "ref"> {
    SvgComponent: ComponentType<SVGProps<SVGSVGElement>>;
    selected?: string[];
    onPartSelect?: ((part: string) => void) | undefined;
    highlightColor?: string;
}

export function InteractiveSVG({
    SvgComponent,
    selected = [],
    onPartSelect,
    highlightColor = "#0080ff",
    ...props
}: InteractiveSVGProps) {
    const ref = useRef<SVGSVGElement | null>(null);

    // Local state for instant toggle (optional)
    const [localSelected, setLocalSelected] = useState<string[]>(selected);

    useEffect(() => {
        const svg = ref.current;
        if (!svg) return;

        const elements = Array.from(
            svg.querySelectorAll("[data-part]:not(.body-model__outline [data-part])")
        ) as SVGElement[];

        const cleanups: Array<() => void> = [];

        elements.forEach((el) => {
            const part = el.getAttribute("data-part");
            if (!part) return;

            el.classList.add(styles["anatomy-part"] ?? "anatomy-part");


            // Make element interactive
            const htmlLike = el as unknown as HTMLElement;
            htmlLike.tabIndex = 0;
            htmlLike.style.cursor = "pointer";
            el.setAttribute("role", "option");
            el.setAttribute("aria-label", part);

            // -----------------------------
            // Apply selected state from localSelected
            // -----------------------------
            const applySelected = () => {
                const isSelected = localSelected.includes(part);
                el.setAttribute("aria-selected", isSelected ? "true" : "false");
                el.style.fill = isSelected ? highlightColor : "";
            };

            applySelected();

            // -----------------------------
            // Event Handlers
            // -----------------------------
            const handleSelect = () => {
                setLocalSelected((prev) => {
                    const newSelected = prev.includes(part)
                        ? prev.filter((p) => p !== part)
                        : [...prev, part];

                    // Update visual immediately
                    el.setAttribute("aria-selected", newSelected.includes(part) ? "true" : "false");
                    el.style.fill = newSelected.includes(part) ? highlightColor : "";

                    onPartSelect?.(part); // notify parent
                    return newSelected;
                });
            };

            const click = () => handleSelect();
            const keydown = (e: KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect();
                }
            };

            el.addEventListener("click", click);
            el.addEventListener("keydown", keydown);

            cleanups.push(() => {
                el.removeEventListener("click", click);
                el.removeEventListener("keydown", keydown);
            });
        });

        return () => {
            cleanups.forEach((fn) => fn());
        };
    }, [SvgComponent, localSelected, highlightColor, onPartSelect]);

    // Keep localSelected in sync if parent updates selected prop
    useEffect(() => {
        setLocalSelected(selected);
    }, [selected]);

    return <div
        style={
            {
                "--anatomy-default": "#c2e0f8",
                "--anatomy-hover": "#71B5F0",
                "--anatomy-selected": highlightColor,
            } as React.CSSProperties
        }
    >
        <SvgComponent role="listbox" ref={ref} {...props} />

    </div>

}
