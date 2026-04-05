uniform vec3 uColorFrom;
uniform vec3 uColorTo;
uniform vec3 uColorAccent;
uniform float uWaveHeight;

varying float vElevation;
varying vec2 vUv;

void main() {
  // Normalize elevation to 0..1
  float normalizedElev = clamp((vElevation / uWaveHeight + 1.0) * 0.5, 0.0, 1.0);

  // Base gradient
  vec3 color = mix(uColorFrom, uColorTo, normalizedElev);

  // Accent at peaks
  float peakFactor = smoothstep(0.7, 1.0, normalizedElev);
  color = mix(color, uColorAccent, peakFactor * 0.6);

  // Subtle edge glow
  float edgeFade = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x)
                 * smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);

  float alpha = edgeFade * (0.6 + normalizedElev * 0.4);

  gl_FragColor = vec4(color, alpha);
}
