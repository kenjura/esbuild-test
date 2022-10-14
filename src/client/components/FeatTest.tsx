import { useEffect, useState } from "react";
import * as React from "react";

import Feat from "../../model/Feat";

export default function FeatTest() {
  const [feat, setFeat] = useState<Feat|null>(null);
  const [status, setStatus] = useState('init');

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading...');
      const feat = await Feat.findOneByName('Cleave');
      if (!feat) return setStatus('no feat found');
      setFeat(feat);
      setStatus('');
    };

    fetchData()
      .catch(err => console.error(err));
  }, []);

  if (status) return <div>{status}</div>;
  if (feat)
    return <h1>hello {feat.name} world</h1>;
}
