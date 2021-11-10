import Particles from "react-particles-js";

function particles() {
  return (
    <Particles
      height="100vh"
      params={{
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}

export default particles;
