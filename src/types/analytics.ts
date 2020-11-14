export interface GoalSchema {
  minute: string;
  wasScored: boolean;
  who: string;
}

export interface HESchema {
  title: string;
  date: string;
  team1: string;
  team2: string;
  fsId: string;
  matchDetailsLink: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goals: GoalSchema[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goalsAtRoundsEnd: GoalSchema[];
}

export interface SESchema {
  title: string;
  date: string;
  team1: string;
  team2: string;
  fsId: string;
  matchDetailsLink: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  historyEvents: HESchema[];
}

export interface ASchema {
  _id: string;
  createdAt: string;
  updatedAt: string;
  scheduledEvents: SESchema[];
}
