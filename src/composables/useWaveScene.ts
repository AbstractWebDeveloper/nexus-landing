import { onUnmounted, type Ref } from 'vue'
import * as THREE from 'three'
import vertexShader from '@/shaders/wave.vert.glsl?raw'
import fragmentShader from '@/shaders/wave.frag.glsl?raw'

function hexToVec3(hex: string): THREE.Color {
  return new THREE.Color(hex)
}

function getCSSColor(varName: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
}

export function useWaveScene(canvasRef: Ref<HTMLCanvasElement | null>) {
  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let material: THREE.ShaderMaterial | null = null
  let animationId: number = 0
  let mutationObserver: MutationObserver | null = null

  const mouse = new THREE.Vector2(0, 0)

  function getSize(canvas: HTMLCanvasElement) {
    const rect = canvas.getBoundingClientRect()
    const w = rect.width || window.innerWidth
    const h = rect.height || window.innerHeight
    return { width: w, height: h }
  }

  function init() {
    const canvas = canvasRef.value
    if (!canvas) return

    const { width, height } = getSize(canvas)
    const isMobile = width < 768
    const segments = isMobile ? 64 : 128
    const pixelRatio = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(pixelRatio)

    // Scene
    scene = new THREE.Scene()

    // Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, -2.5, 4.5)
    camera.lookAt(0, 0, 0)

    // Geometry
    const geometry = new THREE.PlaneGeometry(8, 6, segments, segments)

    // Material
    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMouseRadius: { value: 1.2 },
        uNoiseScale: { value: 0.6 },
        uWaveHeight: { value: 0.5 },
        uColorFrom: { value: hexToVec3(getCSSColor('--gradient-from')) },
        uColorTo: { value: hexToVec3(getCSSColor('--gradient-to')) },
        uColorAccent: { value: hexToVec3(getCSSColor('--accent')) },
      },
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -0.6
    scene.add(mesh)

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1
      mouse.set(nx * 4, ny * 3)
    }
    window.addEventListener('mousemove', onMouseMove)

    // Resize
    const onResize = () => {
      if (!renderer || !camera) return
      const { width: w, height: h } = getSize(canvas)
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    // Theme change observer
    mutationObserver = new MutationObserver(() => {
      if (!material) return
      material.uniforms.uColorFrom.value = hexToVec3(getCSSColor('--gradient-from'))
      material.uniforms.uColorTo.value = hexToVec3(getCSSColor('--gradient-to'))
      material.uniforms.uColorAccent.value = hexToVec3(getCSSColor('--accent'))
    })
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      if (!renderer || !scene || !camera || !material) return

      material.uniforms.uTime.value = clock.getElapsedTime()
      material.uniforms.uMouse.value.lerp(mouse, 0.05)

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup handler
    const cleanup = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
    ;(init as any)._cleanup = cleanup
  }

  function destroy() {
    cancelAnimationFrame(animationId)
    mutationObserver?.disconnect()
    ;(init as any)._cleanup?.()
    renderer?.dispose()
    renderer = null
    scene = null
    camera = null
    material = null
  }

  onUnmounted(destroy)

  return { init, destroy }
}
