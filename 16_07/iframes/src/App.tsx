import { useRef, useState } from 'react'
import './App.css'
import { Environment, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BufferGeometry, Material, Mesh } from 'three'

function App() {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null)

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.x += delta
  })

  return (
    <>
      <Environment preset='forest' />

      <OrbitControls />

      <ambientLight intensity={0.5} />

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

      <pointLight position={[-10, -10, -10]} />

      <mesh
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </>
  )
}

export default App