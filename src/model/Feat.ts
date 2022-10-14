export default class Feat {
  name: string;
  desc: blarg;
  validated: boolean;
  static findOneByName: (string) => Feat | null;
  static parseOne: (string) => Feat | null;
  static parseMany: ([string]) => [Feat];

  constructor(props: any) {
    this.name = props.name ?? "Unknown feat";
    this.desc = props.desc ?? "";
    this.validated = props.validated ?? false;
  }
}

/**
 * given a valid feat's name, returns a full, type- and system-valid Feat
 * if invalid, returns null
 */
Feat.findOneByName = async function (featName: string): Feat | null {
  featName;
  const { feats } = getFixtures();
  return feats.find(feat => feat.name === featName) || null;
  // TBI
};

/**
 * parses a single feat from the YAML representation of a character
 * returns a valid Feat object if possible. Note that this is not
 * necessarily a "valid" Feat from a system perspective, thus
 * "validated" = false. The character could have Feats that don't
 * exist in the system but exist in that specific game. Or they just
 * made a mistake. Either way, the UI will handle it if feats are
 * not validated.
 */
Feat.parseOne = function (featStub: string): Feat | null {
  // featStub is literally just a string containing the name of the feat

  return new Feat({ name: featStub, validated: false });
};

Feat.parseMany = function (featStubs: [string]): [Feat] {
  const feats = featStubs.map(Feat.parseOne); // TODO: filter out nulls, if parseOne ever starts emitting them
  return feats;
};


function getFixtures() {
  return {
    feats: [
      { name:'Cleave', description:'You cleave' },
      { name:'Power Attack', description:'You power attack' },
    ]
  }
}