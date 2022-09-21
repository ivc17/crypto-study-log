import cube from 'assets/cube.svg'
// import { MoveDirection, OutMode } from "tsparticles-engine";

export const particleConfig = {
  fpsLimit: 100,
  fullScreen: false,
  pauseOnOutsideViewport:true,
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


export const configEmitter = {
  fpsLimit: 100,
  fullScreen: false,
  pauseOnOutsideViewport:true,
  particles: {
    color: {
      value: '#ffffff'
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
      value: 5
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
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    }
  },

  emitters: [
    {
        direction: 'top' as any,
        position: {
          y:5,
        },
        life: {
            duration: 1,
            delay: 8,
            count: 0,
      },
      rendom: {
         enable:true
      }
    },
  ],
  absorbers: [
    {
      opacity:0,  
      position: { x: 50, y: 100 },
      size: {
        value: 100,
      }
    }
  ],
  detectRetina: true

}

export const configGradient= {
  fpsLimit: 60,
  fullScreen: false,
  pauseOnOutsideViewport:true,
  particles: {
    // gradient: [
    //   {
    //     "type": "radial",
    //     "colors": [
    //       {
    //         "stop": 0.25,
    //         "value": "#5bc0eb"
    //       },
    //       {
    //         "stop": 1,
    //         "value": "#000000",
    //         "opacity": 0
    //       }
    //     ]
    //   }],
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
    },
    move: {
      direction: 'none' as any,
      enable: true,
      outModes: {
        default: 'destroy'as any
      },
      random: true,
      speed: 10,
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
        enable: true,
        area: 100
      },
      limit: 5,
      value: 5
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
    },
    size: {
      value: { min: 100, max: 500 },
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 100,
        sync: false
      }
    }
  },
  emitters: {
    direction: "none",
    position: {
      x: 50,
      y: 50
    },
    rate: {
      delay: 1,
      quantity: 1
    },
    size: {
      width: 100,
      height: 0
    }
  },
  detectRetina: true

}