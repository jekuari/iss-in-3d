import * as React from 'react'
2
3import { Setup } from '../Setup'
4
5import { PointerLockControls, Icosahedron } from '../../src'
6
7export default {
8  title: 'Controls/PointerLockControls',
9  component: PointerLockControlsScene,
10}
11
12const NUM = 2
13
14interface Positions {
15  id: string
16  position: [number, number, number]
17}
18
19function Icosahedrons() {
20  const positions = React.useMemo(() => {
21    const pos: Positions[] = []
22    const half = (NUM - 1) / 2
23
24    for (let x = 0; x < NUM; x++) {
25      for (let y = 0; y < NUM; y++) {
26        for (let z = 0; z < NUM; z++) {
27          pos.push({
28            id: `${x}-${y}-${z}`,
29            position: [(x - half) * 4, (y - half) * 4, (z - half) * 4],
30          })
31        }
32      }
33    }
34
35    return pos
36  }, [])
37
38  return (
39    <group>
40      {positions.map(({ id, position }) => (
41        <Icosahedron key={id} args={[1, 1]} position={position}>
42          <meshBasicMaterial color="white" wireframe />
43        </Icosahedron>
44      ))}
45    </group>
46  )
47}
48
49function PointerLockControlsScene() {
50  return (
51    <>
52      <Setup controls={false} camera={{ position: [0, 0, 10] }}>
53        <Icosahedrons />
54        <PointerLockControls />
55      </Setup>
56    </>
57  )
58}
59
60export const PointerLockControlsSceneSt = () => <PointerLockControlsScene />
61PointerLockControlsSceneSt.story = {
62  name: 'Default',
63}
64
65function PointerLockControlsSceneWithSelector() {
66  return (
67    <>
68      <div
69        id="instructions"
70        style={{
71          display: 'flex',
72          justifyContent: 'center',
73          alignItems: 'center',
74          height: '2em',
75          background: 'white',
76        }}
77      >
78        Click here to play
79      </div>
80      <Setup controls={false} camera={{ position: [0, 0, 10] }}>
81        <Icosahedrons />
82        <PointerLockControls selector="#instructions" />
83      </Setup>
84      <div
85        id="instructions"
86        style={{
87          display: 'flex',
88          justifyContent: 'center',
89          alignItems: 'center',
90          height: '2em',
91          background: 'white',
92        }}
93      >
94        Click here to play
95      </div>
96    </>
97  )
98}
99
100export const PointerLockControlsSceneStWithSelector = () => <PointerLockControlsSceneWithSelector />
101PointerLockControlsSceneStWithSelector.story = {
102  name: 'With selector',
103}