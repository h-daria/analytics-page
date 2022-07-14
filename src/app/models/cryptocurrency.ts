export class Cryptocurrency {
    name: string;
    abbreviation: string;
    iconPath: string;
    category: string;
    date: Date;
    diagrams: {
      diagram1Path: string,
      diagram2Path: string,
    };
    trendState: string;
    stateIconPath: string;
    trading: string;
    periodPrices: {
      O: number,
      H: number,
      L: number,
      C: number
    };
    resistantLevels: {
      long: {
        level: number,
        target: number
      },
      short: {
        level: number,
        target: number
      }
    };
    supportLevels: {
      long: {
        level: number,
        target: number
      },
      short: {
        level: number,
        target: number
      }
    }

    constructor(name: string, abbreviation: string, iconPath: string, category:string, date: Date, diagrams: any, trendState: string, 
                stateIconPath: string, trading: string, periodPrices: any, resistantLevels: any, supportLevels: any) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.iconPath = iconPath;
        this.category = category;
        this.date = date;
        this.diagrams = diagrams;
        this.trendState = trendState;
        this.stateIconPath = stateIconPath;
        this.trading = trading;
        this.periodPrices = periodPrices;
        this.resistantLevels = resistantLevels;
        this.supportLevels = supportLevels;
    }
}
