function computeErrorThreshold(err1: any, err2: any) {
  if (err1 === null || err2 === null) {
    return null;
  } else if (Math.abs(err1) === Math.abs(err2)) {
    return `±${Math.abs(err1)}`;
  } else {
    const max = Math.max(err1, err2);
    const min = Math.min(err1, err2);
    return `+${max}/${min}`;
  }
}

// Fn to transform to desired data
function transformOnePlanet(planet: any) {
  return {
    name: planet.pl_name,
    discoveryMethod: planet.pl_discmethod,
    facility: planet.pl_facility,
    neighbors: planet.pl_pnum,
    orbitsInDays: planet.pl_orbper,
    orbitsInDaysError: computeErrorThreshold(
      planet.pl_orbpererr1,
      planet.pl_orbpererr2
    ),
    lastUpdate: planet.rowupdate,
    hostStar: planet.pl_hostname
  };
}

export { transformOnePlanet };