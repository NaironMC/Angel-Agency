import React, { useRef } from "react";

export default function Magnetic({ children = null, strength = 0.3 }){
  const ref = useRef(null);
  const onMove = e => {
    const el = ref.current;
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width/2);
    const my = e.clientY - (rect.top + rect.height/2);
    el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
  };
  const onLeave = () => { if(ref.current) ref.current.style.transform = `translate(0,0)`; };
  return (
    <span onMouseMove={onMove} onMouseLeave={onLeave} style={{ display:"inline-flex" }}>
      <span ref={ref} style={{ transition:"transform .15s ease" }}>{children}</span>
    </span>
  );
}
