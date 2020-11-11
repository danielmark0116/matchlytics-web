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
  goals: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goalsAtRoundsEnd: any;
}

export interface SESchema {
  title: string;
  date: string;
  team1: string;
  team2: string;
  fsId: string;
  matchDetailsLink: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  historyEvents: any[];
}

export interface ASchema {
  _id: string;
  createdAt: string;
  updatedAt: string;
  scheduledEvents: SESchema[];
}
