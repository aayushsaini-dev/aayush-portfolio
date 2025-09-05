// src/hooks/useSectionInView.ts
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../contexts/ActiveSectionContext";

export function useSectionInView(sectionName: string, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);

  return { ref };
}
