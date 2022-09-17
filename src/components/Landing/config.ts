import cube from 'assets/cube.svg'

export const particleConfig = {
  fpsLimit: 100,
  fullScreen: true,
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
        distance: 400,
        duration: 0.4
      },
      grab: {
        distance: 400,
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
      enable: true,
      opacity: 1,
      width: 2,
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
      value: 30
      // density: {
      //   enable: true,
      //   area: 1000
      // },
      // value: 70
    },
    opacity: {
      value: 1,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
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
      value: { min: 5, max: 60 }
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