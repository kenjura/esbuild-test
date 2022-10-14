import { useEffect, useState } from "react";
import * as React from "react";

import Feat from "../../model/Feat";

export default function FeatTest() {
  const [feat, setFeat] = useState({});

  useEffect(async () => {
    const feat = await Feat.findOneByName(2);
    setFeat(feat);
  }, []);

  return <h1>hello {feat.name} world</h1>;
}
