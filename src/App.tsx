import { useState } from 'react'

import SidebarElement from './components/sidebar-element/SidebarElement'
import './App.css'

function App() {

  return (
    <>
      <SidebarElement title="Migros-Vereinsbons"></SidebarElement>
      <SidebarElement title="NEWS"></SidebarElement>
      <SidebarElement title="Corona-Schutzkonzept"></SidebarElement>

      <br></br>
      <p style={{ color: "red" }}>So styled man CSS Inline.</p>
      <p className="laila">So styled man CSS mit einer CSS Klasse aus einem anderen File zum Beispiel.</p>
    </>
  )
}

export default App
