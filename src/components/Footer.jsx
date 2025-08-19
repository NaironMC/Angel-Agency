import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div style={{maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", gap:16, flexWrap:"wrap"}}>
        <div>© {new Date().getFullYear()} Angel’s Path Agency. All rights reserved.</div>
        <div style={{opacity:.7}}>
          Maputo • Johannesburg • Remote
        </div>
      </div>
    </footer>
  );
}
