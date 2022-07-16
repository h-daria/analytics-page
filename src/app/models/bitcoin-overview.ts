export class BitcoinOverview {
    averageMonthlyReturn: string;
    risk: string;
    saleTerm: {
        inPlus: string,
        inMinus: string
    };
    profitFactor: string;
    averageLevels: {
        purchase: [{
           case: string,
           percentage: string
        }],
        targets: [{
            case: string,
            percentage: string
        }]
    };
    localLevels: {
        supportLongArray: [{
            case: string,
            percentage: string
        }],
        resistShort: [{
            case: string,
            percentage: string
        }]
    };
    price: string;
    state: string;
    stateIconPath: string;
    avgMonthPL: string;
    annualPN: string;
    marketCap: string;
    marketDominance: string;
    tradingVolume: string;
    quotient: string;
    highestPrice: string;
    lowestPrice: string;

    constructor(
        averageMonthlyReturn: string,
        risk: string,
        saleTerm: any,
        profitFactor: string,
        averageLevels: any,
        localLevels: any,
        price: string,
        state: string,
        stateIconPath: string,
        avgMonthPL: string,
        annualPN: string,
        marketCap: string,
        marketDominance: string,
        tradingVolume: string,
        quotient: string,
        highestPrice: string,
        lowestPrice: string,) {
            this.averageMonthlyReturn = averageMonthlyReturn;
            this.risk = risk;
            this.saleTerm = saleTerm;
            this.profitFactor = profitFactor;
            this.averageLevels = averageLevels;
            this.localLevels = localLevels;
            this.price = price;
            this.state = state;
            this.stateIconPath = stateIconPath;
            this.avgMonthPL = avgMonthPL;
            this.annualPN =annualPN;
            this.marketCap = marketCap;
            this.marketDominance = marketDominance;
            this.tradingVolume = tradingVolume;
            this.quotient = quotient;
            this.highestPrice = highestPrice;
            this.lowestPrice = lowestPrice
    }
}
