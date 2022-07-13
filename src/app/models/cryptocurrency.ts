export class Cryptocurrency {
    name: string;
    abbreviation: string;
    iconPath: string;
    category: string;
    trendState: string;
    stateIconPath: string;
    trading: string;
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

    constructor(name: string, abbreviation: string, iconPath: string, category:string, trendState: string, 
                stateIconPath: string, trading: string, resistantLevels: any, supportLevels: any) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.iconPath = iconPath;
        this.category = category;
        this.trendState = trendState;
        this.stateIconPath = stateIconPath;
        this.trading = trading;
        this.resistantLevels = resistantLevels;
        this.supportLevels = supportLevels;
    }
}
