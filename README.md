# 3D Hero ribbon — setup

## 1. Install the 3D deps

```bash
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
```

## 2. Drop in the files

```
components/
├── Hero.jsx          (replace your existing file — now imports Hero3D)
└── Hero3D/
    ├── index.jsx      (Canvas, lights, bloom)
    └── RibbonKnot.jsx (the twisted ribbon geometry + material)
```

## 3. Why it's built this way

- **The shape**: a lemniscate (figure-8) path pushed slightly out of plane (`zAmp`),
  swept with `THREE.TubeGeometry` into a ribbon. This is what gives it that
  twisted, infinity-loop look from your reference clip rather than a plain donut/knot.
- **The material**: `meshPhysicalMaterial` with high metalness + clearcoat is what
  produces the glassy/chrome highlight streaks sliding across the surface as it rotates
  — that's driven by the `<Environment preset="city" />` reflection map, not by any
  texture, so it's cheap and looks great in motion.
- **Bloom**: `@react-three/postprocessing`'s `Bloom` gives the soft glow around the
  brightest highlights, matching the glow in your clip. `Vignette` darkens the edges
  slightly so it blends into your navy background instead of looking like a cutout.
- **Client-only load**: `Hero3D` is loaded via `next/dynamic` with `ssr: false` in
  `Hero.jsx` since WebGL has zero value server-side and would just error during SSR.

## 4. Easy things to tune

In `RibbonKnot.jsx`:
- `radius` — overall size of the loop
- `zAmp` — how much it twists out of flat (0 = flat figure-8, higher = more 3D twist)
- `twists` — how many twists along the loop
- `tubeRadius` (prop, passed from `Hero3D/index.jsx`) — thickness of the ribbon

In `Hero3D/index.jsx`:
- `Bloom intensity` — turn down if the glow feels too strong on smaller screens
- Swap `Environment preset` (`"city"`, `"night"`, `"studio"`, `"sunset"`) to change
  the character of the reflections — `"night"` reads moodier/darker, `"studio"` is
  cleaner/brighter highlights

## 5. Performance note

This is a real-time WebGL scene, so on very low-end phones you may want to lower
`dpr` in `Hero3D/index.jsx` (e.g. `dpr={[1, 1.5]}`) or drop `mipmapBlur` on the
Bloom effect if you see frame drops.
