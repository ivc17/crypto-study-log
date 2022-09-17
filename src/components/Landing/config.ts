import cube from 'assets/cube.svg'

export const particleConfig = {
  fpsLimit: 100,
  fullScreen: false,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse'
      },
      onHover: {
        enable: true,
        mode: 'grab'
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      },
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#00ccff',
      distance: 300,
      // enable: true,
      opacity: 1,
      width: 2,
      anim: {
        enable: true,
        opacity_min: 0.0,
        sync: false
      }
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none' as any,
      enable: true,
      outModes: {
        default: 'bounce'as any
      },
      random: true,
      speed: 3,
      straight: false,
      noise: {
        enable: true,
        delay: {
          value: 0.3
        }
      }
    },
    number: {
      density: {
        enable: false,
        area: 2000
      },
      limit: 0,
      value: 20
    },
    opacity: {
      value: 1,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.8,
        sync: false
      }
    },
    shape: {
      image: {
        height: 88,
        src:cube,
        width: 80
      },
      type: "image"
    },
    size: {
      value: { min: 5, max: 30 },
      // anim: {
      //   enable: false,
      //   speed: 1,
      //   opacity_min: 0.1,
      //   sync: false
      // }
    }
  },
  // polygon: {
  //   draw: {
  //     enable: true,
  //     lineColor: "#ffffff",
  //     lineWidth: 5
  //   },
  //   enable: true,
  //   move: {
  //     radius: 100
  //   },
  //   position: {
  //     x: 40,
  //     y: 40
  //   },
  //   inlineArrangement: "one-per-point",
  //   scale: 3,
  //   type: "inline",
  //   url:
  //     "https://upload.wikimedia.org/wikipedia/commons/3/30/Vector-based_example.svg"
  // },
  detectRetina: true
}