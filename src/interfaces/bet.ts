import { NumberType } from '../helpers/numberType';
import { Ruleta } from './ruleta';
import { BetType } from '../helpers/betType';

export interface Bet {
    num?: number;
    color?: string;
    numberType?: NumberType;
    amount?: number;
    betType?: BetType;
    userName: string;
    ruleta?: Ruleta;
}

