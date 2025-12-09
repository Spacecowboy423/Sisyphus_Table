/** @format */

const sisyphusSteps = [
  {
    id: 1,
    title: "Planning & Design",
    description: "Initial research and planning phase. Studied existing Sisyphus tables, created sketches, and planned the build approach.",
    details: "Researched Bruce Shapiro's original build designs, researched 3-D printer designs for sisbot, and determined materials needed. Created initial sketches and measurements for the table dimensions that then determined sisbot parameters. Designed blueprint for build from research purchased material to begin build.",
    image: "./images/Planning.jpg"
  },
  {
    id: 2,
    title: "Electronics Assembly",
    description: "Setting up the Control Board, CNC shield & Arduino, Raspberry Pi, and stepper motors to the pulley system and track that drive the magnetic mechanism.",
    details: "Installed the Arduino/Raspberry Pi controller, stepper motors, and power supply. Wired all connections and tested basic motor movements.",
    image: "./images/Wiring CNC.jpg"
  },
  {
    id: 3,
    title: "Mechanical System",
    description: "Building the internal mechanisms that move the magnet beneath the sand.",
    details: "Assembled the polar coordinate system with arms and bearings. Mounted the magnet holder and ensured smooth movement across the full range of motion.",
    image: "./images/Test CNC Top.jpg"
  },
  {
    id: 4,
    title: "Table Construction",
    description: "Building the wooden frame and preparing for the glass top.",
    details: "Cut and assembled the table frame, sanded and finished the wood. Created the recessed area for the sand tray and ensured everything was level.",
    image: "./images/My Table Side.jpg"
  },
  {
    id: 5,
    title: "Sand Tray & Glass",
    description: "Creating the sand bed and installing the tempered glass surface.",
    details: "Built the sand tray with proper depth, then created recessed section to contain the sand. Filled with fine sand, and carefully installed the tempered glass top. Ensured the glass was perfectly level.",
    image: "./images/Finish Top.jpg"
  },
  {
    id: 6,
    title: "Programming & Testing",
    description: "Writing the code to create beautiful patterns in the sand.",
    details: "Developed pattern generation code, tested various designs, and fine-tuned the motor speeds and acceleration for smooth operation.",
    image: "./images/Programming.jpg"
  },
  {
    id: 7,
    title: "Final Assembly",
    description: "Putting it all together and final testing.",
    details: "Connected all components, performed full system testing, adjusted timing and speeds, and created the first complete patterns.",
    image: "./images/Finish Top Lights.jpg"
  },
  {
    id: 8,
    title: "Finished Product",
    description: "The completed Sisyphus table in action!",
    details: "Final product running smoothly, creating mesmerizing patterns. Added LED lighting for enhanced visual appeal.",
    image: "./images/Finish Side Over Lights.jpg" // update later to a video of the table printing a piece
  }
];

export default sisyphusSteps;