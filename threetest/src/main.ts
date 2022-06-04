import { Vector3 } from 'three'
import './style.css'

import Render, { UpdateCamera } from './three'


const app = document.querySelector<HTMLDivElement>('#app')!

Render()

const position = new Vector3( 0, 15, 100 );

window.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    position.add(new Vector3(0, -10, 0))
  } else if (e.key === "s") {
    position.add(new Vector3(0, 10, 0))
  } else if (e.key === "a") {
    position.add(new Vector3(10, 0, 0))
  } else if (e.key === "d") {
    position.add(new Vector3(-10, 0, 0))
  }
  UpdateCamera(position, new Vector3(0,0,0))
  Render()
});

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
