import { getAllPlanets } from "./extract";
import { bulkLoadPlanetsToFile } from "./load";
import { transformOnePlanet } from "./transform";

const outputFile = `${__dirname}/out.json`;

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
        // load
        await bulkLoadPlanetsToFile(transformedPlanets, outputFile);
        console.log("Loading was successful, end of pipeline");
      } catch (err) {
        console.error(err);
      }
}

startETLPipeline();