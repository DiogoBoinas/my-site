import { useState, useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Tabs } from '@mantine/core';
import { IconUser, IconList } from '@tabler/icons';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [activeTab, setActiveTab] = useState('first');

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
    <Particles id="tsparticles"
    style={{zIndex:-1}}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#E0FFFF",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#4b0082",
          },
          links: {
            color: "#4b0082",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }} />
      <Tabs value={activeTab} onTabChange={setActiveTab} variant="pills" radius="lg" color={"indigo"} style={{marginTop:10, paddingInline:10}}>
        <Tabs.List grow>
          <Tabs.Tab value="first" icon={<IconUser />}>Personal Info</Tabs.Tab>
          <Tabs.Tab value="second" icon={<IconList />}>Projects</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first"><PersonalInfo /></Tabs.Panel>
        <Tabs.Panel value="second"><Projects /></Tabs.Panel>
      </Tabs>
      </div>
  );
}

export default App;
