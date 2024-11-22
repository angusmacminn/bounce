varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vNoise;


uniform sampler2D uNoiseTexture;
uniform float uTime;
uniform float uNoiseScale;
uniform float uPixelation;
uniform float uBlendFactor;
uniform vec2 uMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uOctaves;
uniform float uPersistence;
uniform float uLacunarity;
uniform float uAmplitude;


// inverse Lerp
float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

// remap
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

//HASH
vec3 hash( vec3 p ) 
{
	p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
            dot(p,vec3(269.5,183.3,246.1)),
            dot(p,vec3(113.5,271.9,124.6)));

	return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

//NOISE
float noise( in vec3 p )
{
  vec3 i = floor( p );
  vec3 f = fract( p );

	vec3 u = f*f*(3.0-2.0*f);

  return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                   mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
              mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                   mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

//FBM
float fbm(vec3 p, int octaves, float persistence, float lacunarity){
  float amplitude = 0.5;
  float frequency = 0.7;
  float total = 0.0;
  float normalization = 0.0;

  for(int i = 0; i < octaves; ++i){
    float noiseValue = noise(p * frequency);
    total += noiseValue * amplitude;
    normalization += amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }

  total /= normalization;

  return total;
}

// //DOMAIN WARPING
float domainWarpingFBM(vec3 coords, float amplitude, float frequency, int octaves, float persistence, float lacunarity){
    vec3 offset = vec3(
        fbm(coords * frequency, octaves, persistence, lacunarity),
        fbm(coords * frequency + vec3(43.235, 23.112, 0.0), octaves, persistence, lacunarity), 
        0.0
    );
    float noiseSample = fbm(coords * frequency + offset, octaves, persistence, lacunarity);

    vec3 offset2 = vec3(
        fbm(coords * frequency + 4.0 * offset + vec3(15.325, 1.421, 3.235), octaves, persistence, lacunarity),
        fbm(coords * frequency + 4.0 * offset + vec3(4.32, 0.532, 6.234), octaves, persistence, lacunarity), 
        0.0
    );
    noiseSample = fbm(coords * frequency + 4.0 * offset2, octaves, persistence, lacunarity);

    return noiseSample * amplitude;    
}
#include ../includes/perlinClassic3D.glsl

void main() 
{
        float time = uTime * 0.1;
    vec3 normal = vNormal;
    vec2 uv = vUv;

    vec3 color1 = vec3(1.0, 1.0, 1.0); //purple
    vec3 color2 = vec3(0.0, 0.0, 0.0); // black?
    vec3 offPurp = vec3(1.0, 0.7, 0.7);

    vec3 color3 = vec3(0.1, 0.2, 0.6);
    vec3 color4 = vec3(0.3, 0.3, 0.7);
    vec3 black = vec3(0.0);


    // //background noise
    // float noiseValue = domainWarpingFBM(vec3(uv * 1.0, time * 0.2), uAmplitude, 1.0, int(uOctaves), uPersistence, uLacunarity); // amplitude, frequency, octaves, persistence, lacunarity    noiseValue *= 5.0;
    // vec3 baseNoise = mix(color2, color1, noiseValue);


    gl_FragColor = vec4(uv.x, uv.y, 1.0, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}