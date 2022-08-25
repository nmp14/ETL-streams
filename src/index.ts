import { getAllPlanets } from "./extract";

// File to run and manage steps of pipeline
const startETLPipeline = async () => {
    try {
        const planets: any = await getAllPlanets();
        console.log(planets);
        console.log(`Extracted ${planets.length} planets from the API`);
    
        // TODO Transform step
    
        // TODO Load step
      } catch (err) {
        console.error(err);
      }
}

startETLPipeline();