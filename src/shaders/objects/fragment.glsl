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


void main() 
{
    float time = uTime * 0.1;
    vec3 normal = vNormal;
    vec2 uv = vUv;



    gl_FragColor = vec4(uv.x, uv.y, 1.0, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}