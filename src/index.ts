import { getAllPlanets } from "./extract";
import { transformOnePlanet } from "./transform";

// File to run and manage steps of pipeline
const startETLPipeline = async () => {
    try {
        // Extract
        const planets: any = await getAllPlanets();
        console.log(`Extracted ${planets.length} planets from the API`);
    
        // Transform
        const transformedPlanets: any = planets.map((p: any) => transformOnePlanet(p));
        console.info("Transform complete");
        // TODO Load step
      } catch (err) {
        console.error(err);
      }
}

startETLPipeline();