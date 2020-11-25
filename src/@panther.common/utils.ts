export const generateBackgroundPattern = () => {
  const getRandom = (min, max) => {
    if (min > max) {
      return -1;
    }

    if (min === max) {
      return min;
    }

    let r;

    do {
      r = Math.random();
    } while (r === 1.0);

    return min + (r * (max - min + 1));
  };
  let backgroundStyle;

  let checkBrowserName = (name) => {
    const agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf(name.toLowerCase()) > -1) {
      return true;
    }
    return false;
  };

  if (checkBrowserName('safari')) {
    const rot = getRandom(0, 255);
    const blau = getRandom(0, 255);
    const gruen = getRandom(0, 255);
    const rot_zwei = getRandom(0, rot);
    const blau_zwei = getRandom(0, blau);
    const gruen_zwei = getRandom(0, gruen);
    const transparent = getRandom(2, 5);
    backgroundStyle = '-webkit-linear-gradient(rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') 0%, rgba(' + rot_zwei + ',' + blau_zwei + ',' + gruen_zwei + ',.8) 100%)';

    for (let i = 0; i < 6; i++) {

      const rot = getRandom(0, 255);
      const blau = getRandom(0, 255);
      const gruen = getRandom(0, 255);
      const transparent = getRandom(5, 5);
      const grad = getRandom(-45, 45);
      const prozent_eins = getRandom(0, (screen.width / 4) * 3);
      const prozent_zwei = getRandom(prozent_eins, screen.width);
      backgroundStyle = backgroundStyle + ' ,-webkit-linear-gradient(' + grad + 'deg,transparent 0,transparent ' + prozent_eins + 'px, rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') ' + prozent_eins + 'px, rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') ' + prozent_zwei + 'px,transparent ' + prozent_zwei + 'px,transparent 100%)';
    }

  } else {

    if (checkBrowserName('firefox')) {

      const rot = getRandom(0, 255);
      const blau = getRandom(0, 255);
      const gruen = getRandom(0, 255);
      const rot_zwei = getRandom(0, rot);
      const blau_zwei = getRandom(0, blau);
      const gruen_zwei = getRandom(0, gruen);
      const transparent = getRandom(2, 5);
      backgroundStyle = '-moz-linear-gradient(rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') 0%, rgba(' + rot_zwei + ',' + blau_zwei + ',' + gruen_zwei + ',.8) 100%)';




      for (let i = 0; i < 6; i++) {

        const rot = getRandom(0, 255);
        const blau = getRandom(0, 255);
        const gruen = getRandom(0, 255);
        const transparent = getRandom(5, 5);
        const grad = getRandom(-45, 45);
        const prozent_eins = getRandom(0, (screen.width / 4) * 3);
        const prozent_zwei = getRandom(prozent_eins, screen.width);
        backgroundStyle = backgroundStyle + ' ,-moz-linear-gradient(' + grad + 'deg,transparent 0,transparent ' + prozent_eins + 'px, rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') ' + prozent_eins + 'px, rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') ' + prozent_zwei + 'px,transparent ' + prozent_zwei + 'px,transparent 100%)';
      }


    } else {
      const rot = getRandom(0, 255);
      const blau = getRandom(0, 255);
      const gruen = getRandom(0, 255);
      const rot_zwei = getRandom(0, rot);
      const blau_zwei = getRandom(0, blau);
      const gruen_zwei = getRandom(0, gruen);
      const transparent = getRandom(2, 5);
      backgroundStyle = 'linear-gradient(rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') 0%, rgba(' + rot_zwei + ',' + blau_zwei + ',' + gruen_zwei + ',.8) 100%)';

      for (let i = 0; i < 6; i++) {

        const rot = getRandom(0, 255);
        const blau = getRandom(0, 255);
        const gruen = getRandom(0, 255);
        const transparent = getRandom(5, 5);
        const grad = getRandom(-45, 45);
        const prozent_eins = getRandom(0, (screen.width / 4) * 3);
        const prozent_zwei = getRandom(prozent_eins, screen.width);
        backgroundStyle = backgroundStyle + ' ,linear-gradient(' + grad + 'deg,transparent 0,transparent ' + prozent_eins + 'px, rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') ' + prozent_eins + 'px, rgba(' + rot + ',' + blau + ',' + gruen + ',.' + transparent + ') ' + prozent_zwei + 'px,transparent ' + prozent_zwei + 'px,transparent 100%)';
      }

    }
  }
  return backgroundStyle;
};