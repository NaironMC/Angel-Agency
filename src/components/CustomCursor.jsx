import React, { useEffect, useRef } from "react";

export default function CustomCursor(){
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const speed = 0.18;
    const onMove = e => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      rx += (x - rx) * speed;
      ry += (y - ry) * speed;
      if(dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      if(ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    tick();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div className="cursor" aria-hidden>
      <div className="dot" ref={dot} />
      <div className="ring" ref={ring} />
    </div>
  );
}
